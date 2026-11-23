<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

// Sprite: Chromium Authors, BSD-style license; see public/images/chromium-dino/LICENSE.txt.
// https://chromium.googlesource.com/chromium/src/+/refs/heads/main/components/neterror/resources/images/default_100_percent/offline/100-offline-sprite.png
// The two scenes are a repeatable illustration, not a game or a benchmark.
const elapsed = ref(0)
const playing = ref(true)
let frame = 0
let previous = 0
const loop = 7
const crash = 4.25

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
function restart() {
  elapsed.value = 0
  previous = 0
}

const time = computed(() => elapsed.value % loop)
const slowTime = computed(() => Math.min(crash, Math.floor(time.value * 4) / 4))
const crashed = computed(() => time.value >= crash)
function obstacle(t: number) {
  return 400 - (t % 2.5) * 180
}
function jump(t: number, slow: boolean) {
  // The slow scene misses its second jump; a low frame rate alone does not cause a collision.
  if (slow && t >= 2.5) return 0
  const phase = (t % 2.5 - 1.35) / 1.05
  return phase >= 0 && phase <= 1 ? Math.sin(phase * Math.PI) * 58 : 0
}
function dinosaurFrame(t: number, isCrashed: boolean) {
  if (isCrashed) return 1024
  if (jump(t, false) > 0) return 848
  return Math.floor(t * 8) % 2 ? 936 : 980
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) playing.value = false
  if (playing.value) frame = requestAnimationFrame(tick)
})
onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

<template>
  <div class="game-example">
    <div class="game-title"><strong>Um jogo</strong><span>Consegue saltar a tempo?</span></div>
    <div v-for="scene in ['smooth', 'slow']" :key="scene" class="scene">
      <div class="scene-label">
        <strong>{{ scene === 'smooth' ? 'Imagem fluida' : 'Imagem aos saltos' }}</strong>
        <span>{{ scene === 'smooth' ? 'Muitas imagens por segundo' : 'Poucas imagens por segundo' }}</span>
      </div>
      <svg viewBox="0 0 440 110" role="img" :aria-label="scene === 'smooth' ? 'Dinossauro salta sobre os catos numa animação fluida' : 'Dinossauro move-se aos saltos e acaba por chocar com um cato'">
        <line x1="10" y1="91" x2="430" y2="91" stroke="#8b9296" stroke-width="2" />
        <svg :x="obstacle(scene === 'smooth' ? time : slowTime)" y="56" width="25" height="35" viewBox="228 2 17 35" preserveAspectRatio="none" overflow="hidden">
          <image href="/images/chromium-dino/sprite.png" width="1233" height="100" />
        </svg>
        <svg x="55" :y="44 - jump(scene === 'smooth' ? time : slowTime, scene === 'slow')" width="44" height="47" :viewBox="`${dinosaurFrame(scene === 'smooth' ? time : slowTime, scene === 'slow' && crashed)} 2 44 47`" overflow="hidden">
          <image href="/images/chromium-dino/sprite.png" width="1233" height="100" />
        </svg>
        <text v-if="scene === 'slow' && crashed" x="250" y="48" text-anchor="middle" class="game-over">FIM DO JOGO</text>
      </svg>
    </div>
    <div class="game-footer">
      <p><strong>O computador tem de:</strong> seguir as regras · detetar obstáculos · desenhar imagens</p>
      <div class="controls">
        <button type="button" @click="toggle">{{ playing ? 'Pausar' : 'Continuar' }}</button>
        <button type="button" @click="restart">Recomeçar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-example { width: 100%; margin-top: 20px; }
.game-title { display: flex; align-items: baseline; gap: 12px; margin-bottom: 8px; }
.game-title strong { font-size: 21px; color: #202124; }
.game-title span { color: #505b60; font-size: 14px; }
.scene { background: #f8fbfc; border: 1px solid #cbd8de; border-radius: 12px; margin-bottom: 8px; overflow: hidden; }
.scene-label { display: flex; align-items: baseline; justify-content: space-between; padding: 7px 12px 0; }
.scene-label strong { font-size: 15px; color: #009ee0; }
.scene-label span { font-size: 12px; color: #505b60; }
.scene svg { display: block; width: 100%; height: 86px; image-rendering: pixelated; }
.scene svg svg { width: 44px; height: 47px; }
.scene svg svg:first-of-type { width: 25px; height: 35px; }
.game-over { fill: #d82168; font-size: 17px; font-weight: 700; letter-spacing: 1px; }
.game-footer { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
.game-footer p { color: #505b60; font-size: 13px; line-height: 1.4; margin: 3px 0 0; }
.game-footer p strong { color: #202124; }
.controls { display: flex; gap: 5px; flex: none; }
button { border: 1px solid #009ee0; border-radius: 7px; background: white; padding: 5px 8px; color: #006e9d; font: inherit; font-size: 12px; cursor: pointer; }
button:focus-visible { outline: 3px solid #fbd20a; outline-offset: 2px; }
</style>
