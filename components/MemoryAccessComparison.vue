<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

// Both lanes load eight blocks, then consume one per second.
const elapsed = ref(0)
const playing = ref(true)
let frame = 0
let last = 0
const cycle = computed(() => Math.floor(elapsed.value / 11000))
const cycleTime = computed(() => (elapsed.value % 11000) / 1000)
const loading = computed(() => cycleTime.value < 3)
const slot = computed(() => loading.value ? 0 : Math.floor(cycleTime.value - 3))
const phase = computed(() => loading.value ? 0 : (cycleTime.value - 3) % 1)
const brokenLeft = computed(() => cycle.value * 8 + (loading.value ? 0 : slot.value + (phase.value >= .65 ? 1 : 0)))
const brokenRight = computed(() => cycle.value * 4 + (loading.value ? 0 : Math.ceil(slot.value / 2) + (slot.value % 2 === 0 && phase.value >= .65 ? 1 : 0)))

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
}
function blockTransform(side: number, index: number) {
  const position = 225 - (index - 1) * 20
  let x = position
  let y = 151
  let rotation = 0
  if (loading.value) {
    const t = Math.max(0, Math.min(1, (cycleTime.value - (index - 1) * .18) / 1.5))
    x = 55 + (position - 55) * (1 - (1 - t) ** 2)
  } else if (index - 1 === slot.value) {
    if (side === 1 && index % 2 === 0) {
      const t = Math.max(0, (phase.value - .2) / .8)
      const velocity = Math.sin((cycle.value * 8 + index) * 12.9898) * 70
      x += velocity * t
      y += -145 * t + 125 * t * t
      rotation = velocity * t * 3
    } else {
      const t = Math.min(phase.value / .53, 1)
      x += (345 - position) * (1 - (1 - t) ** 3)
    }
  }
  return `translate(${x} ${y}) rotate(${rotation}) scale(.45) translate(-20 -23)`
}
function blockOpacity(side: number, index: number) {
  if (loading.value || index - 1 > slot.value) return 1
  if (index - 1 < slot.value) return 0
  if (side === 1 && index % 2 === 0) return phase.value < .7 ? 1 : Math.max(0, (1 - phase.value) / .3)
  return phase.value < .65 ? 1 : 0
}
function fragmentTransform(index: number) {
  const t = Math.max(0, (phase.value - .65) / .35)
  const seed = (cycle.value * 8 + slot.value + 1) * 17 + index * 47
  const angle = Math.sin(seed * 12.9898) * Math.PI
  const distance = 18 + (index % 3) * 10
  return `translate(${Math.cos(angle) * distance * t} ${Math.sin(angle) * distance * t}) rotate(${index * 100 * t})`
}
function showBreak(side: number) {
  return !loading.value && phase.value >= .65 && (side === 0 || slot.value % 2 === 0)
}
function pickaxeAngle(side: number) {
  if (loading.value || (side === 1 && slot.value % 2 === 1)) return -36
  const p = phase.value
  if (p < .35) return -36 - 10 * p / .35
  if (p < .65) return -46 * (1 - (p - .35) / .3) ** 2
  return -36 * ((p - .65) / .35)
}
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) playing.value = false
  if (playing.value) frame = requestAnimationFrame(tick)
})
onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

<template>
  <section class="comparison block-comparison" aria-label="Comparação de blocos recebidos da memória">
    <div class="panels">
      <div v-for="side in 2" :key="side" class="panel">
        <div class="panel-heading"><strong>{{ side === 1 ? 'Todos aproveitados' : 'Alguns deitados fora' }}</strong><span>8 blocos de cada vez</span></div>
        <svg viewBox="0 0 400 220" role="img" :aria-label="side === 1 ? 'Oito blocos azuis chegam da memória e são todos partidos.' : 'Oito blocos chegam da memória; os cinzentos são deitados fora e os azuis são partidos.'">
          <defs>
            <pattern :id="`access-grid-${side}`" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#e5eef1" stroke-width="1" /></pattern>
            <clipPath :id="`factory-exit-${side}`"><rect x="68" y="0" width="332" height="220" /></clipPath>
          </defs>
          <rect width="400" height="220" :fill="`url(#access-grid-${side})`" />
          <path d="M20 169H365" stroke="#b5cbd4" stroke-width="2" />
          <g :clip-path="`url(#factory-exit-${side})`">
            <g v-for="index in 8" :key="index" :transform="blockTransform(side - 1, index)" :opacity="blockOpacity(side - 1, index)" :class="{ grey: side === 2 && index % 2 === 0 }">
              <path d="M0 10l19-10 20 10-19 11z" class="top" stroke-width="2"/><path d="M0 10v25l20 11V21z" class="front" stroke-width="2"/><path d="M20 21v25l19-11V10z" class="right" stroke-width="2"/>
            </g>
          </g>
          <path d="M10 169V105l17-15v15l19-15v15l22-15v79Z" fill="#dce8ed" stroke="#788c95" stroke-width="2" stroke-linejoin="round" />
          <rect x="19" y="119" width="11" height="11" fill="#fff" stroke="#788c95" />
          <rect x="39" y="119" width="11" height="11" fill="#fff" stroke="#788c95" />
          <text x="39" y="187" text-anchor="middle" class="label">Memória</text>
          <g :transform="`translate(230 29) rotate(${pickaxeAngle(side - 1)} 49 154)`">
            <g transform="translate(82 98) rotate(30)">
              <path d="M-4 1V62Q-4 66 0 66Q4 66 4 62V1Z" fill="#405660" stroke="#202124" stroke-width="2"/>
              <path d="M0 10V60" fill="none" stroke="#9cabb1" stroke-width="2" stroke-linecap="round"/>
              <path d="M-39 8Q-28-4 0-7Q28-4 39 8Q24 5 0 5Q-24 5-39 8Z" fill="#202124" stroke="#202124" stroke-width="2" stroke-linejoin="round"/>
              <path d="M-29 3Q-18-2 0-3Q18-2 29 3" fill="none" stroke="#9cabb1" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M-5-6Q0-8 5-6V5Q0 6-5 5Z" fill="#405660" stroke="#202124" stroke-width="1.5"/>
            </g>
          </g>
          <g v-if="showBreak(side - 1)" transform="translate(345 151)" :opacity="(1 - phase) / .35">
            <rect v-for="index in 6" :key="index" x="-3" y="-3" width="6" height="6" rx="1" :fill="index % 2 ? '#009ee0' : '#80cbe9'" :transform="fragmentTransform(index)" />
            <text x="13" :y="-8 - (phase - .65) * 55" class="plus">+</text>
          </g>
        </svg>
        <div class="result"><span>Blocos partidos</span><strong>{{ side === 1 ? brokenLeft : brokenRight }}</strong></div>
      </div>
    </div>
    <div class="bottom-row"><p>Não basta um processador rápido, precisamos de boas instruções.</p><div class="controls"><button type="button" @click="toggle">{{ playing ? 'Pausar' : 'Continuar' }}</button><button type="button" @click="reset">Reiniciar</button></div></div>
  </section>
</template>

<style scoped>
.top { fill: #b7e3f4; stroke: #009ee0; } .front { fill: #80cbe9; stroke: #009ee0; } .right { fill: #009ee0; stroke: #009ee0; }
.grey .top { fill: #d9dfe1; stroke: #78868c; } .grey .front { fill: #b7c0c4; stroke: #78868c; } .grey .right { fill: #929fa5; stroke: #78868c; }
.plus { fill: #d82168; font-size: 25px; font-weight: 700; }
</style>
