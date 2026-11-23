<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

// Both memories deliver one block every four seconds. Each hit takes one second.
const elapsed = ref(0)
const playing = ref(true)
const deliveryTime = computed(() => (elapsed.value % 4000) / 1000)
const arrived = computed(() => elapsed.value >= 600)
const cycleTime = computed(() => arrived.value ? ((elapsed.value - 600) % 4000) / 1000 : 0)
const hits = computed(() => arrived.value ? Math.min(4, Math.floor(cycleTime.value + 0.25)) : 0)
const hitPhase = computed(() => cycleTime.value % 1)
let frame = 0
let last = 0

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
function angle(hard: boolean) {
  if (!arrived.value || (!hard && cycleTime.value >= 1)) return -36
  const p = hitPhase.value
  if (p < .4) return -36 - 10 * (p / .4)
  if (p < .75) return -46 * (1 - (p - .4) / .35) ** 2
  return -36 * (1 - (1 - (p - .75) / .25) ** 2)
}
function remaining(hard: boolean) {
  return hard ? 4 - hits.value : Math.max(0, 1 - hits.value)
}
function blockVisible(hard: boolean) {
  return arrived.value && (hard ? hits.value < 4 : hits.value === 0)
}
function incomingX() {
  const t = Math.min(deliveryTime.value / .6, 1)
  return 40 + 204 * (1 - (1 - t) ** 2)
}
function breakProgress(hard: boolean) {
  const sinceFirstHit = elapsed.value / 1000 - .6 - (hard ? 3.75 : .75)
  return sinceFirstHit < 0 ? 1 : Math.min((sinceFirstHit % 4) / .4, 1)
}
function fragmentTransform(index: number, progress: number) {
  const angle = Math.sin(index * 47 * 12.9898) * Math.PI
  const distance = 18 + (index % 3) * 10
  return `translate(${Math.cos(angle) * distance * progress} ${Math.sin(angle) * distance * progress}) rotate(${index * 100 * progress})`
}
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) playing.value = false
  if (playing.value) frame = requestAnimationFrame(tick)
})
onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

<template>
  <section class="roofline-programs" aria-label="Comparação de dois programas no modelo do telhado">
    <div class="comparison-layout">
      <div class="lanes">
        <div v-for="hard in [true, false]" :key="String(hard)" class="lane">
          <div class="lane-heading">
            <strong>{{ hard ? 'A · Bloco duro' : 'B · Bloco fácil' }}</strong>
            <span>{{ hard ? '4 batidas por bloco' : '1 batida por bloco' }}</span>
          </div>
          <svg viewBox="0 0 420 115" role="img" :aria-label="`${hard ? 'Programa A, bloco duro' : 'Programa B, bloco fácil'}: ${remaining(hard)} batidas em falta. ${!arrived || (!hard && hits >= 1) ? 'À espera de um bloco.' : 'A trabalhar.'}`">
            <defs><clipPath :id="`delivery-exit-${hard}`"><rect x="61" y="0" width="359" height="115" /></clipPath></defs>
            <path d="M10 91 H410" stroke="#b5cbd4" stroke-width="2" />
            <path d="M12 91V42l14-12v12l16-12v12l19-12v61Z" fill="#dce8ed" stroke="#788c95" stroke-width="2" stroke-linejoin="round" />
            <rect x="20" y="53" width="9" height="9" fill="white" stroke="#788c95" />
            <rect x="38" y="53" width="9" height="9" fill="white" stroke="#788c95" />
            <text x="36" y="108" text-anchor="middle" class="small-label">Memória</text>
            <path d="M72 72 H170 M161 66 L170 72 L161 78" fill="none" stroke="#009ee0" stroke-width="2" :opacity="deliveryTime < .6 ? 1 : .3" />
            <text x="122" y="62" text-anchor="middle" class="small-label">mesmo ritmo</text>
            <g :clip-path="`url(#delivery-exit-${hard})`">
              <g v-for="block in ['current', 'incoming']" :key="block" v-show="block === 'current' ? blockVisible(hard) : deliveryTime < .6" :transform="`translate(${block === 'current' ? 244 : incomingX()} 71) translate(-20 -23)`">
                <path d="M0 10l19-10 20 10-19 11z" fill="#b7e3f4" stroke="#009ee0" stroke-width="2" />
                <path d="M0 10v25l20 11V21z" fill="#80cbe9" stroke="#009ee0" stroke-width="2" />
                <path d="M20 21v25l19-11V10z" fill="#009ee0" stroke="#009ee0" stroke-width="2" />
                <text x="10" y="33" text-anchor="middle" class="hit-count">{{ block === 'incoming' ? (hard ? 4 : 1) : remaining(hard) }}</text>
              </g>
            </g>
            <g :transform="`translate(130 -51) rotate(${angle(hard)} 49 154)`">
              <g transform="translate(82 98) rotate(30)">
                <path d="M-4 1V62Q-4 66 0 66Q4 66 4 62V1Z" fill="#405660" stroke="#202124" stroke-width="2" />
                <path d="M0 10V60" fill="none" stroke="#9cabb1" stroke-width="2" stroke-linecap="round" />
                <path d="M-39 8Q-28-4 0-7Q28-4 39 8Q24 5 0 5Q-24 5-39 8Z" fill="#202124" stroke="#202124" stroke-width="2" stroke-linejoin="round" />
                <path d="M-29 3Q-18-2 0-3Q18-2 29 3" fill="none" stroke="#9cabb1" stroke-width="1.5" stroke-linecap="round" />
                <path d="M-5-6Q0-8 5-6V5Q0 6-5 5Z" fill="#405660" stroke="#202124" stroke-width="1.5" />
              </g>
            </g>
            <g v-if="breakProgress(hard) < 1" transform="translate(244 71)" :opacity="1 - breakProgress(hard)">
              <rect v-for="index in 6" :key="index" x="-3" y="-3" width="6" height="6" rx="1" :fill="index % 2 ? '#009ee0' : '#80cbe9'" :transform="fragmentTransform(index, breakProgress(hard))" />
              <text x="15" :y="-8 - breakProgress(hard) * 30" class="plus">+</text>
            </g>
            <text x="310" y="67" class="status" :fill="!arrived || (!hard && hits >= 1) ? '#d82168' : '#202124'">{{ !arrived || (!hard && hits >= 1) ? 'À espera' : 'A trabalhar' }}</text>
          </svg>
        </div>
      </div>
      <div class="plot">
        <svg viewBox="0 0 400 300" role="img" aria-label="No gráfico do telhado, o programa B está no limite dos dados. O programa A faz mais trabalho por bloco e está no limite do processador.">
          <text x="12" y="22" class="axis-title">Velocidade ↑</text>
          <path d="M45 36 V245 H382" fill="none" stroke="#202124" stroke-width="2" />
          <path d="M45 230 L252 70" fill="none" stroke="#d82168" stroke-width="4" stroke-linecap="round" />
          <path d="M252 70 H372" fill="none" stroke="#009ee0" stroke-width="4" stroke-linecap="round" />
          <text x="260" y="51" class="roof-label" fill="#009ee0">Processador</text>
          <text x="75" y="103" class="roof-label" fill="#d82168">Dados</text>
          <circle cx="125" cy="168" r="10" fill="#fff" stroke="#d82168" stroke-width="3" />
          <text x="125" y="173" text-anchor="middle" class="point-label">B</text>
          <circle cx="310" cy="70" r="10" fill="#fff" stroke="#009ee0" stroke-width="3" />
          <text x="310" y="75" text-anchor="middle" class="point-label">A</text>
          <text x="211" y="275" text-anchor="middle" class="axis-title">Mais trabalho por bloco →</text>
        </svg>
      </div>
    </div>
    <div class="bottom-row">
      <p>O número no bloco mostra as batidas que faltam.</p>
      <div class="controls"><button type="button" @click="toggle">{{ playing ? 'Pausar' : 'Continuar' }}</button><button type="button" @click="reset">Reiniciar</button></div>
    </div>
  </section>
</template>

<style scoped>
.roofline-programs { margin-top: 12px; color: #202124; }
.comparison-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: center; }
.lanes { display: grid; gap: 10px; }
.lane { border: 1px solid #cbd8de; border-radius: 12px; background: #f8fbfc; overflow: hidden; }
.lane-heading { display: flex; align-items: baseline; justify-content: space-between; padding: 8px 14px 0; }
.lane-heading strong { color: #202124; font-size: 17px; }
.lane-heading span { color: #505b60; font-size: 13px; }
.lane svg, .plot svg { display: block; width: 100%; }
.small-label { font-size: 11px; fill: #505b60; }
.plus { fill: #d82168; font-size: 25px; font-weight: 700; }
.hit-count { font-size: 16px; font-weight: 700; fill: #202124; }
.status { font-size: 14px; font-weight: 700; }
.axis-title { font-size: 15px; font-weight: 700; fill: #202124; }
.roof-label { font-size: 15px; font-weight: 700; }
.point-label { font-size: 13px; font-weight: 700; fill: #202124; }
.bottom-row { display: flex; align-items: center; justify-content: space-between; margin-top: 12px; }
.bottom-row p { margin: 0; font-size: 16px; color: #505b60; }
.controls { display: flex; gap: 8px; }
.controls button { border: 1px solid #009ee0; border-radius: 7px; background: white; padding: 6px 13px; color: #006e9d; font: inherit; font-size: 13px; cursor: pointer; }
.controls button:focus-visible { outline: 3px solid #fbd20a; outline-offset: 2px; }
</style>
