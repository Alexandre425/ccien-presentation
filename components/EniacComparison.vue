<script setup lang="ts">
import { ref } from 'vue'

// Question, scale, vote result, and the equivalent stack.
const stage = ref(0)
// Draw the rear cubes first, so nearer cubes cover them as the stack forms.
const cubes = Array.from({ length: 1000 }, (_, index) => {
  const z = 9 - Math.floor(index / 100)
  const y = Math.floor((index % 100) / 10)
  const x = index % 10
  return { x, y, z, delay: y * 0.3 + (x + (9 - z)) * 0.022 }
})
function advance() { stage.value = Math.min(stage.value + 1, 3) }
function reset() { stage.value = 0 }
</script>

<template>
  <section class="comparison" aria-label="Comparação entre o ENIAC e um telemóvel">
    <div class="scene" :class="{ revealed: stage > 0 }" data-testid="scale-scene">
      <svg class="room" viewBox="0 0 760 310" role="img" :aria-hidden="stage >= 2" :aria-label="stage === 0 ? 'Ilustração isométrica esquemática do ENIAC junto de um chip A17 Pro; o chip está ampliado.' : 'Sala de 15 por 9 metros, com um cubo equivalente inspirado no ENIAC e um chip A17 Pro à escala, assinalado e ampliado.'">
        <defs>
          <pattern id="room-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="#dce8ed" stroke-width="1"/></pattern>
        </defs>
        <!-- The room is 28 pixels per metre; the equivalent 1 cm die is 0.28 pixels. -->
        <rect x="105" y="35" width="420" height="252" fill="url(#room-grid)" stroke="#839ba6" stroke-width="2"/>
        <text x="235" y="25" text-anchor="middle" class="svg-label">SALA · 15 m</text>
        <text x="85" y="166" text-anchor="middle" transform="rotate(-90 85 166)" class="svg-label">9 m</text>
        <!-- Equal 100 px projected edges: 4.4 m × 28 px/m × √(2/3). -->
        <path d="M263 87L349 37 435 87 349 137Z" fill="#dce8ed" stroke="#405660" stroke-width="2"/>
        <path d="M263 87L349 137V237L263 187Z" fill="#9cb1ba" stroke="#405660" stroke-width="2"/>
        <path d="M349 137L435 87V187L349 237Z" fill="#b8cbd3" stroke="#405660" stroke-width="2"/>
        <path d="M280 97v100M297 107v100M315 117v100M332 127v100M366 127v100M383 117v100M401 107v100M418 97v100" stroke="#405660" stroke-width="1.5"/>
        <path d="M268 112l76 44m-76-29l76 44m-76-29l76 44m10-29l76-44m-76 59l76-44m-76 59l76-44" fill="none" stroke="#718b97" stroke-width="1.5" stroke-dasharray="3 3"/>
        <g fill="#405660"><circle cx="273" cy="111" r="1.5"/><circle cx="290" cy="121" r="1.5"/><circle cx="307" cy="131" r="1.5"/><circle cx="324" cy="141" r="1.5"/><circle cx="360" cy="150" r="1.5"/><circle cx="377" cy="140" r="1.5"/><circle cx="394" cy="130" r="1.5"/><circle cx="411" cy="120" r="1.5"/><circle cx="428" cy="110" r="1.5"/></g>
        <path d="M430 177l3-1v7l-3 1z M434 176l.7-.25v7l-.7.25z" fill="#dce8ed" stroke="#405660" stroke-width=".15"/>
        <g fill="#405660"><circle cx="431" cy="178" r=".3"/><circle cx="432" cy="177.7" r=".3"/><circle cx="431" cy="179.5" r=".3"/><circle cx="432" cy="179.2" r=".3"/><circle cx="431" cy="181" r=".3"/><circle cx="432" cy="180.7" r=".3"/><circle cx="431" cy="182.5" r=".3"/><circle cx="432" cy="182.2" r=".3"/></g>
        <text x="350" y="278" text-anchor="middle" class="svg-small">ENIAC · cubo equivalente ≈ 4,4 m de lado</text>
        <path d="M437 184.07l.14-.07.14.07-.14.07z" fill="#009ee0"/><path d="M437 184.07v.08l.14.07.14-.07v-.08l-.14.07z" fill="#007cad"/>
        <path d="M560 207h140m-140 -5v10m28 -10v10m28 -10v10m28 -10v10m28 -10v10m28 -10v10" stroke="#405660" stroke-width="1.5"/>
        <text x="630" y="228" text-anchor="middle" class="svg-small">grelha: 1 m · régua: 5 m</text>
      </svg>
      <svg class="inset" viewBox="0 0 760 310" aria-hidden="true">
        <circle cx="437.14" cy="184.14" r="5" fill="none" stroke="#009ee0" stroke-width="1.5"/>
        <rect x="555" y="45" width="162" height="123" rx="10" fill="#fff" stroke="#009ee0" stroke-width="2"/>
        <text x="636" y="65" text-anchor="middle" class="svg-small">A17 PRO · AMPLIAÇÃO</text>
        <rect x="604" y="73" width="64" height="54" rx="8" fill="#f2f6f8" stroke="#839ba6" stroke-width="1.5"/>
        <path d="M609 95l27-15 27 15-27 15Z" fill="#009ee0" stroke="#007cad" stroke-width="2"/>
        <path d="M609 95v8l27 15 27-15v-8l-27 15Z" fill="#007cad"/>
        <text x="636" y="146" text-anchor="middle" class="svg-small">quadrado ≈ 1 cm de lado</text>
      </svg>
      <div v-if="stage === 2" class="chart" data-testid="comparison-chart" aria-label="Gráfico linear: cerca de 5 000 somas por segundo no ENIAC e estimativa teórica para o telemóvel">
        <div class="chart-title">Somas por segundo · escala linear</div>
        <div class="plot">
          <div class="eniac-pointer"><span>ENIAC<br><strong>≈ 5 000</strong></span><i>↓</i></div>
          <div class="phone-column"><span>Telemóvel · estimativa<br><strong>≈ 48 mil milhões</strong></span><div class="phone-bar" /></div>
          <div class="baseline" />
        </div>
        <div class="chart-foot"><strong>≈ 9,6 milhões de vezes</strong></div>
      </div>
      <div v-if="stage === 3" class="stack" data-testid="eniac-stack">
        <svg viewBox="0 0 760 310" role="img" aria-label="Cubo equivalente de cerca de 9,6 milhões de ENIACs, com 935 metros de altura, comparado com o Burj Khalifa, de 828 metros.">
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
        </svg>
      </div>
    </div>
    <aside class="historical"><img src="/images/eniac.jpg" alt="Fotografia histórica do ENIAC com um operador junto dos painéis"><span>U.S. Army Photo · 1946</span></aside>
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
.scene { position: absolute; left: 0; top: 0; width: 760px; height: 310px; overflow: hidden; border-radius: 12px; background: #f7fafb; }
.scene svg { display: block; width: 100%; height: 100%; }
.room { transform: scale(20); transform-origin: 57.52% 59.4%; transition: transform 5s ease-in-out; }
.revealed .room { transform: scale(1); }
.inset { position: absolute; inset: 0; pointer-events: none; }
.svg-label { font: 700 14px system-ui, sans-serif; fill: #405660; }
.svg-small { font: 12px system-ui, sans-serif; fill: #50656e; }
.historical { position: absolute; right: 0; top: 3px; width: 112px; }
.historical img { width: 112px; height: 85px; object-fit: cover; border-radius: 7px; }
.historical span { display: block; color: #505b60; font-size: 9px; }
.interaction { position: absolute; top: 322px; left: 0; display: flex; align-items: center; gap: 10px; }
.interaction p { margin: 0 14px 0 0; color: #0078ad; font-weight: 700; font-size: 16px; }
button { border: 1px solid #007cad; border-radius: 7px; color: #006b99; background: #fff; padding: 7px 12px; font: 600 13px system-ui, sans-serif; cursor: pointer; }
button:focus-visible { outline: 3px solid #d82168; outline-offset: 2px; }
.chart { position: absolute; inset: 0; background: rgba(255,255,255,.95); padding: 13px 24px; }
.stack { position: absolute; inset: 0; background: #f7fafb; }
.chart-title { font-weight: 700; color: #405660; font-size: 16px; }
.plot { height: 164px; position: relative; margin: 7px 90px 0; }
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
@media (prefers-reduced-motion: reduce) { .room { transition: none; } .phone-bar, .falling-cube { animation: none; } }
</style>
