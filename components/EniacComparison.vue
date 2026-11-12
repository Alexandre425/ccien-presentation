<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

// Question, scale, vote result, and the equivalent stack.
const stage = ref(0)
// Draw the rear cubes first, so nearer cubes cover them as the stack forms.
const cubes = Array.from({ length: 1000 }, (_, index) => {
  const z = 9 - Math.floor(index / 100)
  const y = Math.floor((index % 100) / 10)
  const x = index % 10
  return { x, y, z, delay: y * 0.3 + (x + (9 - z)) * 0.022 }
})
const panels = Array.from({ length: 10 }, (_, index) => {
  const right = index >= 5
  const column = index % 5
  return {
    x: (right ? 349 : 263) + column * 17.2,
    y: (right ? 137 : 87) + column * (right ? -10 : 10),
    skew: right ? -30.17 : 30.17,
  }
})
const lightColors = ['#009ee0', '#fbd20a', '#d82168', '#e8f1f4']
const lights = Array.from({ length: 15 }, (_, index) => ({
  x: 4 + (index % 3) * 4.2,
  y: 20 + Math.floor(index / 3) * 7,
  color: lightColors[(index * 3 + Math.floor(index / 3)) % lightColors.length],
}))
const openingView = [393.64, 204.265, 19, 7.75]
const roomView = [0, 0, 760, 310]
const viewBox = ref(openingView.join(' '))
let animationFrame = 0

function showRoom() {
  cancelAnimationFrame(animationFrame)
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    viewBox.value = roomView.join(' ')
    return
  }
  const start = performance.now()
  function animate(now: number) {
    const progress = Math.min((now - start) / 5000, 1)
    const eased = progress * progress * (3 - 2 * progress)
    viewBox.value = openingView.map((value, index) => value + (roomView[index] - value) * eased).join(' ')
    if (progress < 1) animationFrame = requestAnimationFrame(animate)
  }
  animationFrame = requestAnimationFrame(animate)
}
function advance() {
  if (stage.value === 0) showRoom()
  stage.value = Math.min(stage.value + 1, 3)
}
function reset() {
  cancelAnimationFrame(animationFrame)
  viewBox.value = openingView.join(' ')
  stage.value = 0
}
onBeforeUnmount(() => cancelAnimationFrame(animationFrame))
</script>

<template>
  <section class="comparison" aria-label="Comparação entre o ENIAC e um telemóvel">
    <div v-show="stage !== 2" class="scene" :class="{ revealed: stage > 0 }" data-testid="scale-scene">
      <svg class="room" :viewBox="viewBox" role="img" :aria-hidden="stage >= 2" :aria-label="stage === 0 ? 'Ilustração isométrica esquemática do ENIAC junto de um chip A17 Pro; o chip está ampliado.' : 'Sala de 15 por 9 metros, com um cubo equivalente inspirado no ENIAC e um chip A17 Pro à escala, assinalado e ampliado.'">
        <defs>
          <pattern id="room-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="#dce8ed" stroke-width="1"/></pattern>
        </defs>
        <!-- The room is 28 pixels per metre; the equivalent 1 cm die is 0.28 pixels. -->
        <rect x="105" y="35" width="420" height="252" fill="url(#room-grid)" stroke="#839ba6" stroke-width="2"/>
        <text x="235" y="25" text-anchor="middle" class="svg-label">SALA · 15 m</text>
        <text x="85" y="166" text-anchor="middle" transform="rotate(-90 85 166)" class="svg-label">9 m</text>
        <g transform="translate(-34 24)">
        <!-- Equal 100 px projected edges: 4.4 m × 28 px/m × √(2/3). -->
        <path d="M263 87L349 37 435 87 349 137Z" fill="#dce8ed" stroke="#405660" stroke-width="2"/>
        <path d="M263 87L349 137V237L263 187Z" fill="#9cb1ba" stroke="#405660" stroke-width="2"/>
        <path d="M349 137L435 87V187L349 237Z" fill="#b8cbd3" stroke="#405660" stroke-width="2"/>
        <path d="M280 97v100M297 107v100M315 117v100M332 127v100M366 127v100M383 117v100M401 107v100M418 97v100" stroke="#405660" stroke-width="1.5"/>
        <!-- The panels use the same projected slopes as the cube faces. -->
        <g v-for="panel in panels" :key="`${panel.x}-${panel.y}`" :transform="`translate(${panel.x} ${panel.y}) skewY(${panel.skew})`">
          <rect x="1.7" y="14" width="13.8" height="48" rx="0.8" fill="#405660" stroke="#dce8ed" stroke-width=".5"/>
          <circle v-for="light in lights" :key="`${light.x}-${light.y}`" :cx="light.x" :cy="light.y" r="1.25" :fill="light.color"/>
          <path d="M4 54h3m2 0h3m-8 4h3m2 0h3" stroke="#dce8ed" stroke-width="1.1"/>
        </g>
        <g transform="translate(430 177) skewY(-30.17)">
          <path d="M0 0h3v7H0z M4 0h.7v7H4z" fill="#dce8ed" stroke="#405660" stroke-width=".15"/>
          <g fill="#405660"><circle cx="1" cy="1" r=".3"/><circle cx="2" cy="1" r=".3"/><circle cx="1" cy="2.5" r=".3"/><circle cx="2" cy="2.5" r=".3"/><circle cx="1" cy="4" r=".3"/><circle cx="2" cy="4" r=".3"/><circle cx="1" cy="5.5" r=".3"/><circle cx="2" cy="5.5" r=".3"/></g>
        </g>
        </g>
        <text x="350" y="278" text-anchor="middle" class="svg-small">ENIAC · cubo equivalente ≈ 4,4 m de lado</text>
        <g transform="translate(-34 24)"><path d="M437 184.07l.14-.07.14.07-.14.07z" fill="#009ee0"/><path d="M437 184.07v.08l.14.07.14-.07v-.08l-.14.07z" fill="#007cad"/></g>
        <path d="M560 207h140m-140 -5v10m28 -10v10m28 -10v10m28 -10v10m28 -10v10m28 -10v10" stroke="#405660" stroke-width="1.5"/>
        <text x="630" y="228" text-anchor="middle" class="svg-small">grelha: 1 m · régua: 5 m</text>
      </svg>
      <svg class="inset" viewBox="0 0 760 310" aria-hidden="true">
        <circle v-if="viewBox === roomView.join(' ')" cx="403.14" cy="208.14" r="5" fill="none" stroke="#009ee0" stroke-width="1.5"/>
        <rect x="555" y="45" width="162" height="123" rx="10" fill="#fff" stroke="#009ee0" stroke-width="2"/>
        <text x="636" y="65" text-anchor="middle" class="svg-small">A17 PRO · AMPLIAÇÃO</text>
        <rect x="604" y="73" width="64" height="54" rx="8" fill="#f2f6f8" stroke="#839ba6" stroke-width="1.5"/>
        <path d="M609 95l27-15 27 15-27 15Z" fill="#009ee0" stroke="#007cad" stroke-width="2"/>
        <path d="M609 95v8l27 15 27-15v-8l-27 15Z" fill="#007cad"/>
        <text x="636" y="146" text-anchor="middle" class="svg-small">quadrado ≈ 1 cm de lado</text>
      </svg>
      <div v-if="stage === 3" class="stack" data-testid="eniac-stack">
        <svg viewBox="0 0 760 310" role="img" aria-label="Cubo equivalente de cerca de 9,6 milhões de ENIACs, com 935 metros de altura, comparado com o Burj Khalifa, de 828 metros. Cada cubo pequeno representa cerca de 9 600 ENIACs.">
          <text x="380" y="22" text-anchor="middle" class="svg-label">≈ 9,6 milhões de ENIACs</text>
          <!-- Front elevations share y=240. 195:172.7 = 935:828. -->
          <g v-for="cube in cubes" :key="`${cube.x}-${cube.y}-${cube.z}`" :transform="`translate(${125 + cube.x * 19.5 + cube.z * 3} ${240 - (cube.y + 1) * 19.5 - cube.z * 1.8}) scale(.5)`">
            <g class="falling-cube" :style="{ animationDelay: `${cube.delay}s` }">
              <path d="M0 0l6-3.6h39L39 0z" fill="#edf5f8"/>
              <path d="M39 0l6-3.6v39L39 39z" fill="#a9c0cb"/>
              <path d="M0 0h39v39H0z" fill="#dce8ed"/>
              <path d="M0 0l6-3.6h39v39L39 39H0zM0 0h39v39M39 0l6-3.6" fill="none" stroke="#6f99aa" stroke-width=".8" stroke-linejoin="round"/>
            </g>
          </g>
          <image href="/images/burj-khalifa-silhouette.png" x="444" y="67.3" width="172.7" height="172.7"/>
          <path d="M95 240h510" stroke="#405660" stroke-width="2"/>
          <text x="222" y="259" text-anchor="middle" class="svg-label">Cubo · ≈ 935 m</text>
          <text x="530" y="259" text-anchor="middle" class="svg-label">Burj Khalifa · 828 m</text>
          <text x="380" y="288" text-anchor="middle" class="svg-small">Cada cubo pequeno representa ≈ 9 600 ENIACs</text>
        </svg>
      </div>
    </div>
      <div v-if="stage === 2" class="chart" data-testid="comparison-chart" aria-label="Gráfico linear: cerca de 5 000 somas por segundo no ENIAC e estimativa teórica para o telemóvel">
        <div class="chart-title">Somas por segundo · escala linear</div>
        <div class="plot">
          <div class="eniac-pointer"><span>ENIAC<br><strong>≈ 5 000</strong></span><i>↓</i></div>
          <div class="phone-column"><span>Telemóvel · estimativa<br><strong>≈ 48 mil milhões</strong></span><div class="phone-bar" /></div>
          <div class="baseline" />
        </div>
        <div class="chart-foot"><strong>≈ 9,6 milhões de vezes</strong></div>
      </div>
    <aside v-if="stage === 2" class="historical"><img src="/images/eniac.jpg" alt="Fotografia histórica do ENIAC com um operador junto dos painéis"><span>U.S. Army Photo · 1946</span></aside>
    <div class="interaction">
      <p v-if="stage === 0">Quanto espaço separa estes dois computadores?</p>
      <p v-else-if="stage === 1">Qual faz mais somas por segundo? Votem!</p>
      <p v-else-if="stage === 2">Uma diferença enorme!</p>
      <p v-else>Como imaginar tantos computadores?</p>
      <button v-if="stage < 3" type="button" @click="advance">{{ stage === 0 ? 'Revelar a escala' : stage === 1 ? 'Mostrar comparação' : 'Imaginar 9,6 milhões' }}</button>
      <button type="button" @click="reset">Reiniciar</button>
    </div>
  </section>
</template>

<style scoped>
.comparison { position: relative; height: 395px; }
.scene { position: absolute; left: 50%; top: 0; transform: translateX(-50%); width: 760px; height: 310px; overflow: hidden; border-radius: 12px; background: #f7fafb; }
.scene svg { display: block; width: 100%; height: 100%; }
.room { overflow: hidden; }
.inset { position: absolute; inset: 0; pointer-events: none; }
.svg-label { font: 700 14px system-ui, sans-serif; fill: #405660; }
.svg-small { font: 12px system-ui, sans-serif; fill: #50656e; }
.historical { position: absolute; right: 0; top: 0; width: calc(50% - 8px); }
.historical img { display: block; width: 100%; height: 278px; object-fit: cover; border-radius: 12px; }
.historical span { display: block; margin-top: 5px; color: #505b60; font-size: 10px; }
.interaction { position: absolute; top: 322px; left: 0; width: 100%; display: flex; justify-content: center; align-items: center; gap: 10px; }
.interaction p { margin: 0 14px 0 0; color: #0078ad; font-weight: 700; font-size: 16px; }
button { border: 1px solid #007cad; border-radius: 7px; color: #006b99; background: #fff; padding: 7px 12px; font: 600 13px system-ui, sans-serif; cursor: pointer; }
button:focus-visible { outline: 3px solid #d82168; outline-offset: 2px; }
.chart { position: absolute; left: 0; top: 0; width: calc(50% - 8px); height: 310px; border-radius: 12px; background: #f7fafb; padding: 13px 24px; }
.stack { position: absolute; inset: 0; background: #f7fafb; }
.chart-title { font-weight: 700; color: #405660; font-size: 16px; }
.plot { height: 164px; position: relative; margin: 7px 12px 0; }
.baseline { position: absolute; bottom: 0; left: 0; right: 0; border-bottom: 2px solid #405660; }
.eniac-pointer { position: absolute; bottom: 3px; left: 12%; color: #405660; text-align: center; font-size: 13px; }
.eniac-pointer i { display: block; color: #d82168; font-size: 19px; line-height: 18px; font-style: normal; }
.phone-column { position: absolute; bottom: 2px; right: 12%; width: 160px; text-align: center; color: #405660; font-size: 13px; }
.phone-bar { margin: 5px auto 0; height: 105px; width: 76px; background: #009ee0; transform-origin: bottom; animation: grow 1.8s ease-out both; }
.chart-foot { margin-top: 14px; color: #202124; font-size: 13px; }
@keyframes grow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
@keyframes cube-fall {
  0% { opacity: 0; transform: translateY(-100px); animation-timing-function: ease-in; }
  15% { opacity: 1; }
  70% { transform: translateY(0); animation-timing-function: ease-out; }
  84% { transform: translateY(-7px); animation-timing-function: ease-in; }
  100% { opacity: 1; transform: translateY(0); }
}
.falling-cube { animation: cube-fall .7s both; }
@media (prefers-reduced-motion: reduce) { .phone-bar, .falling-cube { animation: none; } }
</style>
