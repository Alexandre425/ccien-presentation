<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'

type Register = 'r1' | 'r2' | 'r3'
type Instruction =
  | { op: 'read', dest: Register, address: number }
  | { op: 'add', dest: Register, left: Register, right: Register }
  | { op: 'write', address: number, source: Register }
type Point = [number, number]
type Ball = { value: number, points: Point[] }

// Change this program and the initial values to tell another small story.
const program: Instruction[] = [
  { op: 'read', dest: 'r1', address: 1 },
  { op: 'read', dest: 'r2', address: 2 },
  { op: 'add', dest: 'r3', left: 'r1', right: 'r2' },
  { op: 'write', address: 3, source: 'r3' },
]
const initialMemory: Record<number, number> = { 1: 7, 2: 5, 3: 0, 4: 3 }
const registers = ref<Record<Register, number>>({ r1: 0, r2: 0, r3: 0 })
const memory = ref({ ...initialMemory })
const index = ref(0)
const elapsed = ref(0)
const running = ref(false)
const paused = ref(false)
const completed = ref(false)
const duration = 1500
let frame = 0
let previous = 0

const instruction = computed(() => program[index.value])
const phase = computed(() => Math.min(2, Math.floor(elapsed.value / duration)))
const progress = computed(() => Math.min(1, (elapsed.value - phase.value * duration) / duration))
const active = computed(() => running.value || paused.value)
const registerY = (register: Register) => ({ r1: 119, r2: 159, r3: 199 })[register]
const memoryY = (address: number) => 110 + (address - 1) * 40
const regToUnit = (register: Register, y: number): Point[] => [[350, registerY(register)], [405, registerY(register)], [405, y], [480, y]]
const unitToReg = (register: Register, y: number): Point[] => [...regToUnit(register, y)].reverse()
const unitToMemory = (address: number): Point[] => [[580, 245], [700, 245], [700, memoryY(address)], [742, memoryY(address)]]
const memoryToUnit = (address: number): Point[] => [...unitToMemory(address)].reverse()

function label(item: Instruction) {
  if (item.op === 'read') return `${item.dest} = ler ${item.address}`
  if (item.op === 'add') return `${item.dest} = ${item.left} mais ${item.right}`
  return `guardar ${item.source} em ${item.address}`
}

const explanation = computed(() => {
  if (completed.value) return 'Programa concluído: vê o resultado na memória.'
  if (!active.value) return 'O que acontece quando o processador segue uma instrução?'
  const item = instruction.value
  if (item.op === 'read') return [
    `A unidade de memória pede o endereço ${item.address}.`,
    `A memória envia o valor ${memory.value[item.address]}.`,
    `O valor chega ao registo ${item.dest}.`,
  ][phase.value]
  if (item.op === 'add') return [
    'Os dois valores saem dos registos.',
    'A unidade de soma junta os valores.',
    `O resultado segue para o registo ${item.dest}.`,
  ][phase.value]
  return [
    `O valor de ${item.source} segue para a unidade de memória.`,
    `A unidade envia o valor para o endereço ${item.address}.`,
    `A memória guarda o valor no endereço ${item.address}.`,
  ][phase.value]
})

const balls = computed<Ball[]>(() => {
  if (!active.value) return []
  const item = instruction.value
  if (item.op === 'read') {
    if (phase.value === 0) return [{ value: item.address, points: unitToMemory(item.address) }]
    if (phase.value === 1) return [{ value: memory.value[item.address], points: memoryToUnit(item.address) }]
    return [{ value: memory.value[item.address], points: unitToReg(item.dest, 245) }]
  }
  if (item.op === 'add') {
    if (phase.value === 0) return [
      { value: registers.value[item.left], points: regToUnit(item.left, 115) },
      { value: registers.value[item.right], points: regToUnit(item.right, 115) },
    ]
    const result = registers.value[item.left] + registers.value[item.right]
    if (phase.value === 1) return [{ value: result, points: [[500, 115], [530, 115], [550, 115]] }]
    return [{ value: result, points: unitToReg(item.dest, 115) }]
  }
  if (phase.value === 0) return [{ value: registers.value[item.source], points: regToUnit(item.source, 245) }]
  if (phase.value === 1) return [{ value: registers.value[item.source], points: unitToMemory(item.address) }]
  return [{ value: registers.value[item.source], points: [[742, memoryY(item.address)], [742, memoryY(item.address)]] }]
})

function position(points: Point[], t: number): Point {
  const lengths = points.slice(1).map((point, i) => Math.hypot(point[0] - points[i][0], point[1] - points[i][1]))
  let distance = lengths.reduce((sum, length) => sum + length, 0) * (t * t * (3 - 2 * t))
  for (let i = 0; i < lengths.length; i++) {
    if (distance <= lengths[i]) {
      const fraction = lengths[i] ? distance / lengths[i] : 0
      return [points[i][0] + (points[i + 1][0] - points[i][0]) * fraction, points[i][1] + (points[i + 1][1] - points[i][1]) * fraction]
    }
    distance -= lengths[i]
  }
  return points[points.length - 1]
}

function finish() {
  const item = instruction.value
  if (item.op === 'read') registers.value[item.dest] = memory.value[item.address]
  else if (item.op === 'add') registers.value[item.dest] = registers.value[item.left] + registers.value[item.right]
  else memory.value[item.address] = registers.value[item.source]
  running.value = false
  paused.value = false
  if (index.value === program.length - 1) completed.value = true
  else index.value++
}
function tick(time: number) {
  if (previous) elapsed.value += time - previous
  previous = time
  if (elapsed.value >= duration * 3) finish()
  else frame = requestAnimationFrame(tick)
}
function step() {
  if (active.value || completed.value) return
  elapsed.value = 0
  running.value = true
  previous = 0
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) finish()
  else frame = requestAnimationFrame(tick)
}
function togglePause() {
  if (running.value) {
    cancelAnimationFrame(frame)
    running.value = false
    paused.value = true
  } else if (paused.value) {
    paused.value = false
    running.value = true
    previous = 0
    frame = requestAnimationFrame(tick)
  }
}
function restart() {
  cancelAnimationFrame(frame)
  registers.value = { r1: 0, r2: 0, r3: 0 }
  memory.value = { ...initialMemory }
  index.value = 0
  elapsed.value = 0
  running.value = false
  paused.value = false
  completed.value = false
  previous = 0
}
onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

<template>
  <section class="processor-demo" aria-label="Simulação simplificada de um processador">
    <svg viewBox="0 0 864 310" role="img" aria-labelledby="processor-title processor-desc">
      <title id="processor-title">Um programa dentro do processador</title>
      <desc id="processor-desc">As instruções estão à esquerda. No centro, os registos ligam-se às unidades de soma e memória. À direita está a memória. Os valores percorrem as ligações em cada passo.</desc>
      <text x="0" y="22" class="heading">INSTRUÇÕES</text>
      <text x="224" y="22" class="heading">DENTRO DE UM NÚCLEO</text>
      <text x="742" y="22" class="heading">MEMÓRIA</text>
      <text x="742" y="41" class="hint">endereço · valor</text>

      <g v-for="(item, i) in program" :key="i" :transform="`translate(0 ${60 + i * 45})`">
        <rect x="0" y="0" width="200" height="36" rx="8" :class="['instruction', { selected: i === index && !completed }]" />
        <text x="10" y="23" class="pointer">{{ i === index && !completed ? '▶' : '' }}</text>
        <text x="29" y="23" class="code">{{ label(item) }}</text>
      </g>
      <text x="1" y="264" class="hint">Um passo de cada vez</text>

      <rect x="220" y="48" width="452" height="238" rx="16" class="core" />
      <path d="M350 119H405V115H480 M350 159H405 M350 199H405 M405 115V245H480 M580 245H700V110H742 M700 150H742 M700 190H742 M700 230H742" class="wire" />
      <text x="240" y="79" class="unit-heading">REGISTOS</text>
      <text x="240" y="94" class="hint">valores à mão</text>
      <g v-for="reg in (['r1', 'r2', 'r3'] as Register[])" :key="reg" :transform="`translate(240 ${registerY(reg) - 16})`">
        <rect width="110" height="32" rx="6" class="register" :class="{ lit: active && ((instruction.op === 'read' && phase === 2 && instruction.dest === reg) || (instruction.op === 'add' && ((phase === 0 && (instruction.left === reg || instruction.right === reg)) || (phase === 2 && instruction.dest === reg))) || (instruction.op === 'write' && phase === 0 && instruction.source === reg)) }" />
        <text x="12" y="22" class="reg-name">{{ reg }}</text><text x="89" y="22" text-anchor="end" class="reg-value">{{ registers[reg] }}</text>
      </g>
      <rect x="480" y="92" width="100" height="46" rx="10" class="unit" :class="{ lit: active && instruction.op === 'add' }" />
      <text x="530" y="120" text-anchor="middle" class="unit-text">＋ Soma</text>
      <rect x="480" y="222" width="100" height="46" rx="10" class="unit" :class="{ lit: active && instruction.op !== 'add' }" />
      <text x="530" y="242" text-anchor="middle" class="unit-text">↔ Memória</text>
      <text x="530" y="257" text-anchor="middle" class="unit-sub">ler / guardar</text>

      <g v-for="address in [1, 2, 3, 4]" :key="address" :transform="`translate(742 ${memoryY(address) - 16})`">
        <rect width="122" height="32" rx="6" class="memory-row" :class="{ lit: active && instruction.op !== 'add' && instruction.address === address && (instruction.op === 'read' ? phase < 2 : phase > 0) }" />
        <text x="14" y="22" class="address">{{ address }}</text><text x="92" y="22" text-anchor="middle" class="reg-value">{{ memory[address] }}</text>
      </g>
      <text x="795" y="281" class="hint">⋮</text>

      <g v-for="(ball, i) in balls" :key="i" :transform="`translate(${position(ball.points, progress)[0]} ${position(ball.points, progress)[1]})`" class="ball" :class="{ paused }">
        <circle r="13"/><text text-anchor="middle" y="5">{{ ball.value }}</text>
      </g>
      <g v-if="active" class="annotation">
        <path :d="instruction.op === 'add' ? 'M610 78 L582 100 M582 100 l3 -9 M582 100 l9 -2' : 'M610 195 L582 227 M582 227 l2 -10 M582 227 l10 -3'" />
        <ellipse :cx="530" :cy="instruction.op === 'add' ? 115 : 245" rx="58" ry="30" />
        <text x="610" :y="instruction.op === 'add' ? 75 : 192">{{ instruction.op === 'add' ? 'soma' : 'acesso' }}</text>
      </g>
    </svg>
    <div class="bottom-row">
      <p aria-live="polite" class="explanation"><span>↗</span> {{ explanation }}</p>
      <div class="controls" role="group" aria-label="Controlos da simulação">
        <button type="button" :disabled="active || completed" @click="step">Próximo passo</button>
        <button type="button" :disabled="!active" @click="togglePause">{{ paused ? 'Continuar' : 'Pausar' }}</button>
        <button type="button" @click="restart">Reiniciar</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.processor-demo { margin-top: 8px; }
svg { display: block; width: 100%; height: 310px; overflow: visible; font-family: inherit; }
.heading { fill: #4b555a; font-size: 11px; font-weight: 750; letter-spacing: .08em; }
.hint { fill: #56636a; font-size: 11px; }
.instruction, .register, .memory-row { fill: #fff; stroke: #cbd8de; stroke-width: 1.3; }
.instruction.selected { fill: #e8f7fd; stroke: #009ee0; stroke-width: 2; }
.pointer { fill: #009ee0; font-size: 12px; }
.code { fill: #202124; font-family: ui-monospace, monospace; font-size: 12px; font-weight: 650; }
.core { fill: #f8fbfc; stroke: #cbd8de; stroke-width: 1.5; }
.wire { fill: none; stroke: #9bb7c3; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
.unit-heading { fill: #4b555a; font-size: 11px; font-weight: 750; letter-spacing: .05em; }
.unit { fill: #fff; stroke: #9bb7c3; stroke-width: 1.5; }
.lit { fill: #d8f2fc; stroke: #009ee0; stroke-width: 2.5; }
.unit-text { fill: #202124; font-size: 14px; font-weight: 700; }
.unit-sub { fill: #56636a; font-size: 10px; }
.reg-name, .address { fill: #56636a; font-family: ui-monospace, monospace; font-size: 13px; }
.reg-value { fill: #202124; font-size: 16px; font-weight: 750; }
.ball circle { fill: #009ee0; stroke: white; stroke-width: 2; }
.ball circle { animation: bounce 1.5s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
.ball.paused circle { animation-play-state: paused; }
@keyframes bounce { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
.ball text { fill: white; font-size: 12px; font-weight: 750; }
.annotation { pointer-events: none; }
.annotation path { fill: none; stroke: #d82168; stroke-width: 2; marker-end: none; }
.annotation ellipse { fill: none; stroke: #d82168; stroke-width: 2; stroke-dasharray: 5 4; }
.annotation text { fill: #d82168; font-size: 11px; font-weight: 700; }
.bottom-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 8px; }
.explanation { flex: 1; margin: 0; color: #202124; font-size: 15px; font-weight: 600; line-height: 1.25; }
.explanation span { color: #d82168; font-size: 22px; }
.controls { display: flex; gap: 7px; flex: none; }
button { border: 1px solid #9bb7c3; border-radius: 8px; background: #fff; color: #202124; padding: 8px 10px; font: inherit; font-size: 12px; font-weight: 700; cursor: pointer; }
button:first-child { background: #009ee0; border-color: #009ee0; color: white; }
button:disabled { opacity: .45; cursor: default; }
button:focus-visible { outline: 3px solid #d82168; outline-offset: 2px; }
</style>
