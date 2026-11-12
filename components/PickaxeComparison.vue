<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{ mode: 'frequency' | 'parallelism' }>()
const playing = ref(true)
const elapsed = ref(0)
const run = ref(0)
let frame = 0
let last = 0
const panels = computed(() => props.mode === 'frequency'
  ? [{ title: 'Relógio lento', detail: '≈ 1 batida / segundo', workers: 1, period: 1 }, { title: 'Relógio rápido', detail: '≈ 10 batidas / segundo', workers: 1, period: 0.1 }]
  : [{ title: 'Um trabalhador', detail: '1 picareta', workers: 1, period: 1 }, { title: 'Trabalho em paralelo', detail: '4 picaretas', workers: 4, period: 1 }])
const particles = Array.from({ length: 6 }, (_, index) => index)
function count(period: number, workers: number) {
  return Math.floor(elapsed.value / (period * 1000) + 0.35) * workers
}
// A repeatable variation keeps the motion predictable after a restart.
function direction(worker: number, offset: number) {
  return Math.sin((worker * 31 + offset * 47) * 12.9898)
}
function particleStyle(worker: number, slot: number, index: number, period: number) {
  const delay = (slot - 1 + 0.65) * period
  const cycle = Math.max(0, Math.floor((elapsed.value / 1000 - delay) / (10 * period)))
  const seed = worker * 100003 + slot * 7919 + index * 101 + cycle * 104729
  const random = (offset: number) => {
    const value = Math.sin((seed + offset) * 12.9898) * 43758.5453
    return value - Math.floor(value)
  }
  const angle = random(1) * Math.PI * 2
  const distance = 35 + random(2) * 85
  return {
    '--x': `${Math.cos(angle) * distance}px`,
    '--y': `${Math.sin(angle) * distance}px`,
    '--r': `${(random(3) - 0.5) * 720}deg`,
  }
}
function tick(now: number) {
  if (last) elapsed.value += now - last
  last = now
  frame = requestAnimationFrame(tick)
}
function toggle() {
  playing.value = !playing.value
  last = 0
  if (playing.value) frame = requestAnimationFrame(tick)
  else cancelAnimationFrame(frame)
}
function reset() {
  elapsed.value = 0
  last = 0
  run.value++
}
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) playing.value = false
  if (playing.value) frame = requestAnimationFrame(tick)
})
onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

<template>
  <section class="comparison" :class="{ paused: !playing }" :aria-label="mode === 'frequency' ? 'Analogia da frequência do relógio' : 'Analogia do trabalho em paralelo'">
    <div :key="run" class="panels">
      <div v-for="(panel, side) in panels" :key="side" class="panel" :style="{ '--period': `${panel.period}s` }">
        <div class="panel-heading"><strong>{{ panel.title }}</strong><span>{{ panel.detail }}</span></div>
        <svg viewBox="0 0 400 220" role="img" :aria-label="`${panel.title}: ${panel.detail}. Animação ilustrativa de picaretas a partir blocos.`">
          <defs>
            <pattern :id="`grid-${mode}-${side}`" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#e5eef1" stroke-width="1" /></pattern>
          </defs>
          <rect x="0" y="0" width="400" height="220" :fill="`url(#grid-${mode}-${side})`" />
          <g v-for="worker in panel.workers" :key="worker" :transform="panel.workers === 1 ? 'translate(110 14) scale(1.12)' : `translate(${worker % 2 === 1 ? 18 : 205} ${worker <= 2 ? 0 : 108}) scale(.72)`">
            <path d="M14 159H160" stroke="#b5cbd4" stroke-width="2" />
            <g class="block"><path d="M92 112l19-10 20 10-19 11z" fill="#b7e3f4" stroke="#009ee0" stroke-width="2"/><path d="M92 112v25l20 11v-25z" fill="#80cbe9" stroke="#009ee0" stroke-width="2"/><path d="M112 123v25l19-11v-25z" fill="#009ee0" stroke="#009ee0" stroke-width="2"/></g>
            <g class="pickaxe">
              <path d="M48 152L101 91" stroke="#405660" stroke-width="10" stroke-linecap="round"/>
              <path d="M50 150L99 93" stroke="#9cabb1" stroke-width="3" stroke-linecap="round"/>
              <path d="M60 62Q83 64 104 82Q125 98 135 126Q117 108 99 98Q77 78 60 62Z" fill="#202124" stroke="#202124" stroke-width="2" stroke-linejoin="round"/>
              <path d="M73 68Q93 76 108 90Q121 101 127 112" fill="none" stroke="#9cabb1" stroke-width="2" stroke-linecap="round"/>
            </g>
            <g v-for="slot in 10" :key="slot" class="burst" :class="{ slow: panel.period === 1 }" transform="translate(112 124)" :style="{ '--delay': `${panel.period * .65 + (slot - 1) * panel.period}s` }">
              <rect v-for="index in particles" :key="index" class="particle" x="-3" y="-3" width="7" height="7" rx="1" :fill="index % 2 ? '#009ee0' : '#80cbe9'" :style="particleStyle(worker, slot, index, panel.period)" />
              <text class="plus" x="14" y="-8" :style="{ '--dx': `${direction(worker, 20 + slot) * 30}px`, '--dy': `${-20 + direction(worker, 30 + slot) * 20}px` }">+</text>
            </g>
          </g>
        </svg>
        <div class="result">
          <span>Blocos partidos</span>
          <div v-if="mode === 'parallelism'" class="pool" aria-label="Depósito de resultados, capacidade ilustrativa: 40 blocos"><div :style="{ width: `${Math.min(count(panel.period, panel.workers) / 40 * 100, 100)}%` }" /></div>
          <strong data-testid="pickaxe-count">{{ count(panel.period, panel.workers) }}</strong>
        </div>
      </div>
    </div>
    <div class="bottom-row">
      <p>{{ mode === 'frequency' ? 'Quanto mais rápida a frequência, mais operações por segundo. O A17 é 40,000x mais rápido que o ENIAC.' : 'Se o trabalho for independente, pode ser feito em paralelo, em vários núcleos. O A17 tem 6 núcleos.' }}</p>
      <div class="controls"><button type="button" @click="toggle">{{ playing ? 'Pausar' : 'Continuar' }}</button><button type="button" @click="reset">Reiniciar</button></div>
    </div>
  </section>
</template>

<style scoped>
.comparison { margin-top: 12px; }
.panels { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.panel { border: 1px solid #cbd8de; border-radius: 14px; overflow: hidden; background: #f8fbfc; }
.panel-heading { padding: 12px 18px 0; display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
.panel-heading strong { font-size: 18px; color: #202124; }
.panel-heading span { font-size: 13px; color: #505b60; }
.panel svg { display: block; width: 100%; height: 220px; }
.result { display: flex; align-items: baseline; justify-content: space-between; padding: 3px 18px 10px; color: #505b60; font-size: 13px; }
.result strong { color: #009ee0; font-size: 23px; font-variant-numeric: tabular-nums; }
.pool { flex: 1; height: 13px; margin: 0 14px; border: 1px solid #a4c7d4; border-radius: 4px; overflow: hidden; background: white; }
.pool div { height: 100%; background: #009ee0; transition: width .12s ease-out; }
.bottom-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 10px; }
.bottom-row p { margin: 0; color: #505b60; font-size: 13px; }
.controls { display: flex; gap: 8px; flex: none; }
button { border: 1px solid #009ee0; border-radius: 7px; background: white; padding: 6px 13px; color: #006e9d; font: inherit; font-size: 13px; cursor: pointer; }
button:focus-visible { outline: 3px solid #fbd20a; outline-offset: 2px; }
.pickaxe { transform-origin: 51px 151px; animation: swing var(--period) linear infinite; }
.block { transform-origin: 112px 125px; animation: incoming var(--period) linear infinite; }
.particle { opacity: 0; animation: scatter 1s ease-out var(--delay) infinite; }
.plus { fill: #d82168; font-size: 25px; font-weight: 700; opacity: 0; animation: drift 1s ease-out var(--delay) infinite; }
.slow .particle { animation-name: scatter-slow; animation-duration: 10s; }
.slow .plus { animation-name: drift-slow; animation-duration: 10s; }
.paused .pickaxe, .paused .block, .paused .particle, .paused .plus { animation-play-state: paused; }
@keyframes swing { 0%, 100% { transform: rotate(-36deg); } 35% { transform: rotate(-46deg); } 65% { transform: rotate(0deg); } 72% { transform: rotate(5deg); } }
@keyframes incoming { 0% { transform: translate(82px, -95px) rotate(50deg) scale(.65); opacity: 0; } 12% { opacity: 1; } 53% { transform: translate(0, 0) rotate(0) scale(1); opacity: 1; } 64% { transform: translate(0, 0) scale(1.06, .92); opacity: 1; } 65%, 100% { opacity: 0; } }
@keyframes scatter { 0% { transform: translate(0, 0) rotate(0); opacity: 1; } 70%, 100% { transform: translate(var(--x), var(--y)) rotate(var(--r)); opacity: 0; } }
@keyframes drift { 0% { transform: translate(0, 0); opacity: 1; } 70%, 100% { transform: translate(var(--dx), var(--dy)); opacity: 0; } }
@keyframes scatter-slow { 0% { transform: translate(0, 0) rotate(0); opacity: 1; } 7%, 100% { transform: translate(var(--x), var(--y)) rotate(var(--r)); opacity: 0; } }
@keyframes drift-slow { 0% { transform: translate(0, 0); opacity: 1; } 7%, 100% { transform: translate(var(--dx), var(--dy)); opacity: 0; } }
</style>
