<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

// A repeatable illustration of sensing and stopping, not a driving simulation.
const elapsed = ref(0)
const playing = ref(true)
let frame = 0
let previous = 0
const time = computed(() => elapsed.value % 7)
const clamp = (n: number) => Math.max(0, Math.min(1, n))
const ease = (n: number) => { const t = clamp(n); return t * t * (3 - 2 * t) }
const arrival = computed(() => ease((time.value - 0.4) / 1.1))
const crashed = computed(() => time.value >= 3.5)
const braking = computed(() => clamp((time.value - 2.5) / 1.2))
function carX(slow: boolean) {
  if (slow) return 20 + Math.min(time.value, 3.5) * 56
  const brakingDistance = 1.2 * (braking.value - braking.value ** 2 / 2)
  return 20 + 56 * (Math.min(time.value, 2.5) + brakingDistance)
}
function scanProgress(slow: boolean) {
  return clamp((time.value - 1.5) / (slow ? 4.5 : 1))
}
function tick(now: number) {
  if (previous) elapsed.value += (now - previous) / 1000
  previous = now
  frame = requestAnimationFrame(tick)
}
function toggle() {
  playing.value = !playing.value
  previous = 0
  if (playing.value) frame = requestAnimationFrame(tick)
  else cancelAnimationFrame(frame)
}
function restart() { elapsed.value = 0; previous = 0 }
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) playing.value = false
  if (playing.value) frame = requestAnimationFrame(tick)
})
onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

<template>
  <div class="car-example">
    <div class="example-title"><strong>Um carro</strong><span>Consegue parar a tempo?</span></div>
    <div v-for="scene in ['fast', 'slow']" :key="scene" class="scene">
      <div class="scene-label">
        <strong>{{ scene === 'fast' ? 'Análise rápida' : 'Análise lenta' }}</strong>
        <span>{{ scene === 'fast' ? 'Deteta e trava' : 'Não deteta a tempo' }}</span>
      </div>
      <svg viewBox="0 0 440 110" role="img" :aria-label="scene === 'fast' ? 'Um carro analisa outro carro e trava a tempo' : 'Um carro analisa outro carro demasiado devagar e colide'">
        <path d="M10 91 H430" stroke="#8b9296" stroke-width="2" />
        <path d="M10 102 H430" stroke="#cbd8de" stroke-width="1" stroke-dasharray="20 13" />
        <!-- The front-facing car moves from a distant lane into the path. -->
        <g :transform="`translate(290 ${35 + arrival * 14}) scale(${0.7 + arrival * 0.3})`" :opacity="0.35 + arrival * 0.65">
          <path d="M5 28 L9 8 Q11 2 18 2 H41 Q48 2 50 8 L54 28 V38 H5 Z" fill="#e5edf0" stroke="#505b60" stroke-width="2" />
          <path d="M13 17 L15 9 Q16 7 20 7 H39 Q43 7 44 9 L46 17 Z" fill="#99bdcd" />
          <rect x="9" y="23" width="7" height="4" rx="1" fill="#fbd20a" />
          <rect x="43" y="23" width="7" height="4" rx="1" fill="#fbd20a" />
          <rect x="8" y="36" width="9" height="6" rx="2" fill="#505b60" />
          <rect x="42" y="36" width="9" height="6" rx="2" fill="#505b60" />
        </g>
        <!-- The scan sweeps upwards across the front of the other car. -->
        <g v-if="time >= 1.5 && !(scene === 'slow' && crashed) && (scene === 'slow' || scanProgress(false) < 1)" fill="#009ee0">
          <path :d="`M${carX(scene === 'slow') + 75} 80 L295 ${88 - scanProgress(scene === 'slow') * 36} L344 ${88 - scanProgress(scene === 'slow') * 36} Z`" opacity="0.16" />
          <line x1="295" :y1="88 - scanProgress(scene === 'slow') * 36" x2="344" :y2="88 - scanProgress(scene === 'slow') * 36" stroke="#009ee0" stroke-width="3" />
          <text :x="carX(scene === 'slow') + 80 + (time * 18 % 35)" y="58" style="font-size:10px" :opacity="0.4 + 0.3 * Math.sin(time * 6)">0 1</text>
          <text :x="carX(scene === 'slow') + 84 + (time * 12 % 25)" y="82" style="font-size:10px" :opacity="0.4 + 0.3 * Math.cos(time * 5)">1 0</text>
        </g>
        <g :transform="`translate(${carX(scene === 'slow')} 62) rotate(${scene === 'fast' ? 3 * Math.sin(Math.PI * braking) : 0} 40 29)`">
          <path d="M2 25 L8 14 H22 L31 5 H52 L63 14 L72 17 Q76 18 76 23 V29 H2 Z" fill="#009ee0" stroke="#006e9d" stroke-width="2" />
          <path d="M27 14 L34 7 H50 L58 14 Z" fill="#d9f1fb" />
          <circle cx="18" cy="29" r="7" fill="#505b60" /><circle cx="59" cy="29" r="7" fill="#505b60" />
          <circle cx="18" cy="29" r="3" fill="white" /><circle cx="59" cy="29" r="3" fill="white" />
        </g>
        <g v-if="scene === 'slow' && crashed" fill="#d82168">
          <path d="M291 53 l4 8 8 -4 -4 8 8 3 -9 2 3 8 -7 -5 -5 7 1 -9 -9 -2 9 -3 -3 -8z" />
          <text x="350" y="38" text-anchor="middle" style="font-size:15px" font-weight="700">COLISÃO</text>
        </g>
        <text v-if="scene === 'fast' && braking >= 1" x="355" y="38" text-anchor="middle" style="font-size:15px" font-weight="700" fill="#009ee0">PAROU</text>
      </svg>
    </div>
    <div class="footer">
      <p><strong>O computador tem de:</strong> analisar sensores · detetar perigos · travar</p>
      <div class="controls">
        <button type="button" :aria-label="playing ? 'Pausar carro' : 'Continuar carro'" @click="toggle">{{ playing ? 'Pausar' : 'Continuar' }}</button>
        <button type="button" aria-label="Recomeçar carro" @click="restart">Recomeçar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.car-example { width: 100%; margin-top: 20px; }
.example-title { display: flex; align-items: baseline; gap: 12px; margin-bottom: 8px; }
.example-title strong { font-size: 21px; color: #202124; }
.example-title span { color: #505b60; font-size: 14px; }
.scene { background: #f8fbfc; border: 1px solid #cbd8de; border-radius: 12px; margin-bottom: 8px; overflow: hidden; }
.scene-label { display: flex; align-items: baseline; justify-content: space-between; padding: 7px 12px 0; }
.scene-label strong { font-size: 15px; color: #009ee0; }
.scene-label span { font-size: 12px; color: #505b60; }
.scene svg { display: block; width: 100%; height: 86px; }
.footer { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
.footer p { color: #505b60; font-size: 13px; line-height: 1.4; margin: 3px 0 0; }
.footer p strong { color: #202124; }
.controls { display: flex; gap: 5px; flex: none; }
button { border: 1px solid #009ee0; border-radius: 7px; background: white; padding: 5px 8px; color: #006e9d; font: inherit; font-size: 12px; cursor: pointer; }
button:focus-visible { outline: 3px solid #fbd20a; outline-offset: 2px; }
</style>
