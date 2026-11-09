<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

type Mode = 'fast' | 'slow'

const mode = ref<Mode>('fast')
const paused = ref(false)
const elapsedMs = ref(0)
const reducedMotion = ref(false)
const fastCompleted = computed(() => elapsedMs.value < 800 ? 0 : 1 + Math.floor((elapsedMs.value - 800) / 200))
const slowCompleted = computed(() => elapsedMs.value < 1000 ? 0 : 1 + Math.floor((elapsedMs.value - 1000) / 2800))
const completed = computed(() => mode.value === 'fast' ? fastCompleted.value : slowCompleted.value)
const slowPhase = computed(() => elapsedMs.value % 2800)
const fastWorking = computed(() => elapsedMs.value >= 800)
const slowWorking = computed(() => slowPhase.value >= 1000 && slowPhase.value < 1500)
const status = computed(() => {
  if (paused.value) return 'Pausado'
  if (mode.value === 'fast') return fastWorking.value ? 'Processador a trabalhar' : 'Processador à espera dos dados'
  return slowWorking.value ? 'Processador a trabalhar' : 'Processador à espera dos dados'
})
const fastDots = computed(() => {
  if (reducedMotion.value) return Array.from({ length: 4 }, (_, index) => ({ visible: true, position: (index + 1) / 5 }))
  return Array.from({ length: 5 }, (_, offset) => {
    const launch = Math.floor(elapsedMs.value / 200) - offset
    const age = elapsedMs.value - launch * 200
    return { visible: launch >= 0 && age <= 800, position: age / 800 }
  })
})
const slowPosition = computed(() => reducedMotion.value ? .5 : Math.min(slowPhase.value / 1000, 1))
const slowVisible = computed(() => reducedMotion.value || slowPhase.value < 1500)
let timer: ReturnType<typeof setInterval> | undefined
let motionQuery: MediaQueryList | undefined
let origin = 0

function setMode(next: Mode) {
  mode.value = next
  elapsedMs.value = 0
  origin = Date.now()
  paused.value = false
}
function togglePause() {
  if (paused.value) origin = Date.now() - elapsedMs.value
  paused.value = !paused.value
}
function restart() {
  elapsedMs.value = 0
  origin = Date.now()
  paused.value = false
}
function updateMotionPreference(event: MediaQueryListEvent | MediaQueryList) {
  reducedMotion.value = event.matches
}
function tick() {
  if (!paused.value) elapsedMs.value = Date.now() - origin
}

onMounted(() => {
  origin = Date.now()
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  updateMotionPreference(motionQuery)
  motionQuery.addEventListener('change', updateMotionPreference)
  timer = setInterval(tick, 50)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
  motionQuery?.removeEventListener('change', updateMotionPreference)
})
</script>

<template>
  <main class="slide" aria-labelledby="slide-title">
    <header class="topline">
      <span class="eyebrow"><span class="eyebrow-dot" /> ARQUITETURA DE COMPUTADORES</span>
      <span class="chapter">01 <i /> MEMÓRIA</span>
    </header>

    <section class="intro">
      <div>
        <h1 id="slide-title">Porque é que um computador rápido pode ser lento?</h1>
        <p class="subtitle">Às vezes, o processador fica à espera dos dados.</p>
      </div>
      <aside class="insight"><span class="insight-mark">↗</span><span>O mesmo processador.<br><strong>Outro ritmo.</strong></span></aside>
    </section>

    <section class="visual" aria-label="Comparação entre acesso rápido e lento à memória">
      <div class="visual-head"><span>UM PEDIDO DE DADOS</span><span class="visual-line"/><span>TRABALHO CONCLUÍDO</span></div>
      <svg class="diagram" viewBox="0 0 900 202" role="img" aria-labelledby="diagram-title diagram-desc" data-testid="diagram">
        <title id="diagram-title">O efeito da velocidade da memória no trabalho do processador</title>
        <desc id="diagram-desc">Dois percursos sincronizados: os dados rápidos chegam frequentemente; os lentos deixam o processador à espera.</desc>
        <defs>
          <linearGradient id="fast-path" x1="0" x2="1"><stop stop-color="#73e3bc" stop-opacity=".18"/><stop offset="1" stop-color="#73e3bc" stop-opacity=".65"/></linearGradient>
          <linearGradient id="slow-path" x1="0" x2="1"><stop stop-color="#ffb86c" stop-opacity=".15"/><stop offset="1" stop-color="#ffb86c" stop-opacity=".52"/></linearGradient>
        </defs>
        <g class="lane" :class="{ selected: mode === 'fast' }">
          <rect x="1" y="9" width="898" height="79" rx="13" class="lane-bg"/>
          <rect x="35" y="25" width="91" height="45" rx="5" class="memory-box fast-memory"/>
          <path d="M35 36h91M35 48h91M35 60h91" class="memory-lines"/>
          <text x="80" y="19" text-anchor="middle" class="lane-name">MEMÓRIA RÁPIDA</text>
          <path d="M 138 48 H 753" class="track"/><path d="M 138 48 H 753" class="fast-flow"/>
          <circle v-for="(packet, index) in fastDots" :key="`f${index}`" :display="mode === 'fast' && packet.visible ? undefined : 'none'" :cx="138 + packet.position * 615" cy="48" r="4.5" class="dot fast-dot"/>
          <rect x="761" y="22" width="73" height="52" rx="8" class="processor fast-processor" :class="{ working: mode === 'fast' && fastWorking }"/>
          <path d="M770 18v4m9-4v4m9-4v4m9-4v4m9-4v4m9-4v4m9-4v4m-54 52v4m9-4v4m9-4v4m9-4v4m9-4v4m9-4v4m9-4v4" class="chip-pins"/>
          <text x="797" y="44" text-anchor="middle" class="cpu-label">PROCESSADOR</text><text x="797" y="57" text-anchor="middle" class="processor-state">{{ mode !== 'fast' ? '' : fastWorking ? 'A PROCESSAR' : 'À ESPERA' }}</text>
          <text x="850" y="44" class="result">{{ mode === 'fast' ? fastCompleted : '—' }}</text><text x="850" y="59" class="unit">UNID.</text>
        </g>
        <g class="lane" :class="{ selected: mode === 'slow' }">
          <rect x="1" y="105" width="898" height="79" rx="13" class="lane-bg"/>
          <rect x="35" y="121" width="91" height="45" rx="5" class="memory-box slow-memory"/>
          <path d="M35 132h91M35 144h91M35 156h91" class="memory-lines"/>
          <text x="80" y="115" text-anchor="middle" class="lane-name">MEMÓRIA LENTA</text>
          <path d="M 138 144 H 753" class="track"/><path d="M 138 144 H 753" class="slow-flow"/>
          <circle v-if="mode === 'slow' && slowVisible" :cx="138 + slowPosition * 615" cy="144" r="5" class="dot slow-dot"/>
          <rect x="761" y="118" width="73" height="52" rx="8" class="processor slow-processor" :class="{ working: mode === 'slow' && slowWorking }"/>
          <path d="M770 114v4m9-4v4m9-4v4m9-4v4m9-4v4m9-4v4m9-4v4m-54 52v4m9-4v4m9-4v4m9-4v4m9-4v4m9-4v4m9-4v4" class="chip-pins"/>
          <text x="797" y="140" text-anchor="middle" class="cpu-label">PROCESSADOR</text><text x="797" y="153" text-anchor="middle" class="processor-state">{{ mode !== 'slow' ? '' : slowWorking ? 'A PROCESSAR' : 'À ESPERA' }}</text>
          <text x="850" y="140" class="result">{{ mode === 'slow' ? slowCompleted : '—' }}</text><text x="850" y="155" class="unit">UNID.</text>
        </g>
      </svg>
      <div class="lane-notes"><span><b class="mint">●</b> Acesso frequente, trabalho contínuo</span><span><b class="amber">●</b> Mais espera entre operações</span></div>
    </section>

    <footer class="controls">
      <div class="mode-controls" role="group" aria-label="Escolher velocidade dos dados">
        <button type="button" :aria-pressed="mode === 'fast'" :class="{ active: mode === 'fast' }" @click="setMode('fast')"><span class="button-dot mint"/>Dados rápidos</button>
        <button type="button" :aria-pressed="mode === 'slow'" :class="{ active: mode === 'slow' }" @click="setMode('slow')"><span class="button-dot amber"/>Dados lentos</button>
      </div>
      <div class="counter" aria-live="polite"><span class="counter-label">TRABALHO CONCLUÍDO</span><span class="counter-value" data-testid="completed">{{ completed }}</span><span class="counter-unit">unidades</span></div>
      <div class="transport">
        <span class="status" data-testid="status"><i :class="{ waiting: mode === 'slow' && !slowWorking && !paused, paused }"/>{{ status }}</span>
        <div class="transport-buttons">
          <button type="button" class="icon-button" :aria-label="paused ? 'Continuar' : 'Pausar'" @click="togglePause">{{ paused ? 'Continuar' : 'Pausar' }}</button>
          <button type="button" class="icon-button restart" aria-label="Reiniciar" @click="restart">↺ <span>Reiniciar</span></button>
        </div>
      </div>
    </footer>
    <p v-if="reducedMotion" class="sr-only">Movimento reduzido: a contagem mantém-se, sem animação do percurso.</p>
  </main>
</template>

<style scoped>
.slide{box-sizing:border-box;width:100%;height:100%;min-height:540px;padding:34px 48px 28px;background:#101a20;color:#f1f5f4;font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;display:flex;flex-direction:column;overflow:hidden;position:relative;isolation:isolate}.slide:before{content:"";position:absolute;inset:0;z-index:-1;background:radial-gradient(ellipse at 78% 6%,#1e3837 0,transparent 35%),radial-gradient(ellipse at 4% 90%,#152831 0,transparent 36%)}.topline{height:24px;display:flex;justify-content:space-between;align-items:center;color:#96aaa8;font-size:10px;letter-spacing:.16em;font-weight:700}.eyebrow{display:flex;align-items:center;gap:9px}.eyebrow-dot{width:7px;height:7px;background:#73e3bc;border-radius:50%;box-shadow:0 0 12px #73e3bc88}.chapter{display:flex;align-items:center;gap:10px;font-size:9px}.chapter i{height:1px;width:20px;background:#50625f}.intro{display:flex;justify-content:space-between;align-items:flex-end;margin:29px 0 21px}h1{margin:0;font-size:37px;line-height:1.12;letter-spacing:-.045em;font-weight:650}h1 span{color:#73e3bc}.subtitle{margin:11px 0 0;color:#a5b4b2;font-size:13px}.insight{display:flex;align-items:center;gap:11px;margin:0 3px 3px 18px;padding:12px 15px;border:1px solid #304342;border-radius:9px;color:#aab9b7;font-size:11px;line-height:1.55;white-space:nowrap}.insight strong{color:#edf5f2;font-weight:600}.insight-mark{font-size:21px;color:#73e3bc}.visual{border-top:1px solid #2b393c;padding-top:14px}.visual-head{display:flex;align-items:center;gap:13px;color:#7f9391;font-size:8px;font-weight:700;letter-spacing:.13em}.visual-line{height:1px;background:#29383a;flex:1}.diagram{width:100%;height:auto;max-height:202px;display:block;margin-top:8px;overflow:visible}.lane-bg{fill:#172329;stroke:#293a3d;stroke-width:1}.lane.selected .lane-bg{stroke:#526964}.cpu-ring{fill:#1b2a2e;stroke-width:1.3}.fast-ring{stroke:#73e3bc}.slow-ring{stroke:#ffb86c}.cpu-label,.lane-name,.lane-speed,.result,.unit{font-family:inherit}.cpu-label{fill:#dce8e5;font-size:7px;font-weight:700}.lane-name{fill:#abbab7;font-size:8px;font-weight:700;letter-spacing:1px}.lane-speed{font-size:9px;font-weight:750;letter-spacing:1px}.fast-text{fill:#73e3bc}.slow-text{fill:#ffb86c}.track{stroke:#344449;stroke-width:2}.fast-flow,.slow-flow{stroke-width:2}.fast-flow{stroke:url(#fast-path)}.slow-flow{stroke:url(#slow-path)}.dot{stroke:#101a20;stroke-width:1}.fast-dot{fill:#73e3bc}.slow-dot{fill:#ffb86c}.finish{fill:#172329;stroke-width:1.5}.fast-finish{stroke:#73e3bc}.slow-finish{stroke:#ffb86c}.check{fill:none;stroke:#dff7ec;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}.result{fill:#e3eeeb;font-size:12px;font-weight:650}.unit{fill:#819491;font-size:6px;letter-spacing:.8px}.lane-notes{display:flex;justify-content:space-between;padding:3px 19px 0 26px;color:#8ea09d;font-size:10px}.mint{color:#73e3bc}.amber{color:#ffb86c}.controls{margin-top:auto;border-top:1px solid #2b393c;padding-top:17px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:15px}.mode-controls{display:flex;gap:7px}.mode-controls button,.icon-button{font:inherit;color:#a7b7b4;background:#18252a;border:1px solid #344448;border-radius:7px;cursor:pointer}.mode-controls button{height:36px;padding:0 11px;display:flex;align-items:center;gap:8px;font-size:10px}.mode-controls button.active{color:#eff8f4;border-color:#5b766d;background:#1d302f}.button-dot{width:7px;height:7px;border-radius:50%;background:currentColor}.counter{display:flex;align-items:baseline;gap:7px;white-space:nowrap}.counter-label{font-size:8px;letter-spacing:.12em;color:#94a7a3;font-weight:700}.counter-value{font-variant-numeric:tabular-nums;font-size:22px;font-weight:650;color:#f2f7f4;min-width:30px;text-align:right}.counter-unit{font-size:10px;color:#94a7a3}.transport{justify-self:end;display:flex;align-items:center;gap:14px}.status{font-size:9px;color:#a6b6b2;white-space:nowrap;display:flex;align-items:center;gap:7px}.status i{width:6px;height:6px;border-radius:50%;background:#73e3bc}.status i.waiting{background:#ffb86c}.status i.paused{background:#81918e}.transport-buttons{display:flex;gap:6px}.icon-button{height:32px;padding:0 10px;font-size:9px}.icon-button:hover,.mode-controls button:hover{border-color:#78918a;color:#f3f8f5}.restart{display:flex;align-items:center;gap:5px}.restart:first-letter{font-size:15px}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}button:focus-visible{outline:2px solid #73e3bc;outline-offset:3px}@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}@media(max-width:700px){.slide{padding:24px 25px}.intro{margin-top:24px}.insight{display:none}h1{font-size:31px}.controls{grid-template-columns:1fr auto}.counter{grid-column:2;grid-row:1}.transport{grid-column:1/-1;justify-self:space-between;justify-self:stretch;justify-content:space-between}.lane-notes{font-size:8px;padding-left:4px;padding-right:4px}}
.slide{position:absolute;inset:0;width:100%;height:100%;min-height:0;padding:34px 48px 68px}
.intro{margin-top:20px}
.diagram{max-height:175px}
.slide h1{margin:0;font-size:33px;line-height:1.1;letter-spacing:-.04em;font-weight:650;color:#f1f5f4}
.slide h1 span{color:#73e3bc}
.memory-box{fill:#1b2a2e;stroke-width:1.4}
.fast-memory{stroke:#73e3bc}
.slow-memory{stroke:#ffb86c}
.memory-lines{fill:none;stroke:#5f7771;stroke-width:1}
.processor{fill:#1b2a2e;stroke-width:1.3}
.fast-processor{stroke:#73e3bc}
.slow-processor{stroke:#ffb86c}
.slow-processor.working{fill:#273d37;filter:drop-shadow(0 0 5px #73e3bc55)}
.chip-pins{fill:none;stroke:#647875;stroke-width:1}
.processor-state{fill:#9eb1ac;font-family:inherit;font-size:5px;font-weight:700;letter-spacing:.35px}
@media(max-width:700px){.slide h1{font-size:27px}}
</style>