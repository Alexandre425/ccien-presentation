<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const elapsed = ref(0)
let frame = 0
let start = 0

function tick(now: number) {
  if (!start) start = now
  elapsed.value = now - start
  frame = requestAnimationFrame(tick)
}

onMounted(() => {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    frame = requestAnimationFrame(tick)
  }
})

onBeforeUnmount(() => cancelAnimationFrame(frame))

function position(rx: number, ry: number, period: number, phase: number) {
  const angle = phase + elapsed.value * 2 * Math.PI / period
  return { cx: 190 + rx * Math.cos(angle), cy: 85 + ry * Math.sin(angle) }
}
</script>

<template>
  <svg viewBox="0 0 380 170" role="img" aria-label="Modelo animado do Sol e de duas órbitas de planetas" style="display:block;width:100%;height:170px;margin-top:12px">
    <ellipse cx="190" cy="85" rx="110" ry="47" fill="none" stroke="#cbd8de" stroke-width="3" />
    <ellipse cx="190" cy="85" rx="165" ry="70" fill="none" stroke="#cbd8de" stroke-width="3" />
    <circle cx="190" cy="85" r="22" fill="#fbd20a" />
    <circle v-bind="position(110, 47, 8000, -0.7)" r="10" fill="#009ee0" />
    <circle v-bind="position(165, 70, 13000, 2.3)" r="8" fill="#d82168" />
  </svg>
</template>
