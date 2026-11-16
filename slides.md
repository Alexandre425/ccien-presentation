---
theme: default
layout: none
title: A ciência por trás de um computador rápido
favicon: /favicon.svg
htmlAttrs:
  lang: pt-PT
aspectRatio: 16/9
canvasWidth: 980
fonts:
  provider: none
---

<img class="template-cover" src="/template/page-1.png" alt="A ciência por trás de um computador rápido" />

<!-- Opening slide introducing the presentation topic. -->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">Computadores em todo o lado</div>
  <h1>Quantos computadores já usaste <em>hoje</em>?</h1>
  <p class="subtitle">Conta também os que não parecem computadores.</p>
  <div class="grid three">
    <div class="card"><span class="icon">☀️</span><strong>Ao acordar</strong><p>O que te despertou?</p></div>
    <div class="card"><span class="icon">🚌</span><strong>No caminho</strong><p>Como viajaste ou pagaste?</p></div>
    <div class="card"><span class="icon">🏫</span><strong>Na escola</strong><p>Que dispositivos encontraste?</p></div>
  </div>
  <p class="prompt">Levanta a mão e partilha um exemplo.</p>
</div>

<!-- Everyday examples prompt students to identify computers they have used. -->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">Computadores em todo o lado</div>
  <h1>Onde estão os computadores <em>escondidos</em>?</h1>
  <div v-click>
  <p class="subtitle">Um computador não precisa de teclado nem de ecrã.</p>
  <div class="grid six">
    <div class="card"><span class="icon">📱</span><strong>Telemóvel</strong></div>
    <div class="card"><span class="icon">🛗</span><strong>Elevador</strong></div>
    <div class="card"><span class="icon">💳</span><strong>Pagamento</strong></div>
    <div class="card"><span class="icon">🚗</span><strong>Carro</strong></div>
    <div class="card"><span class="icon">⌚</span><strong>Relógio</strong></div>
    <div class="card"><span class="icon">🎮</span><strong>Consola</strong></div>
  </div>
  </div>
</div>

<!-- A click reveals examples of computers without screens or keyboards. -->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">Computadores em todo o lado</div>
  <h1>Onde vive um vídeo antes de chegar ao telemóvel?</h1>
  <div class="split">
    <div><span class="tag">Computadores à distância</span><p class="label">Servidores em centros de dados ajudam a fornecer vídeos, jogos online, pesquisas e serviços de IA.</p><p class="prompt">O teu dispositivo comunica com eles através da rede.</p></div>
    <div><img class="photo" src="/images/servidores.jpg" alt="Fotografia de filas de servidores num centro de dados"/><p class="credit">Carl Lender · CC BY 2.0 · recorte na apresentação</p></div>
  </div>
</div>

<!-- Explains how remote data-center servers provide network services. -->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">Computadores em todo o lado</div>
  <h1>O que acontece quando é <em>demasiado lento</em>?</h1>
  <div class="grid three">
    <div class="card"><span class="icon">🎮</span><strong>Jogo</strong><p>Uma resposta atrasada pode estragar uma jogada.</p></div>
    <div class="card"><span class="icon">💬</span><strong>Videochamada</strong><p>O atraso torna a conversa mais difícil.</p></div>
    <div class="card"><span class="icon">🚨</span><strong>Segurança</strong><p>Um aviso tem de chegar a tempo.</p></div>
  </div>
  <p class="prompt">Não basta conseguir fazer: é preciso fazer a tempo.</p>
</div>

<!-- Shows how delays affect games, calls, and safety systems. -->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">A revolução da velocidade</div>
  <h1>Um computador numa sala ou <em>na mão</em>?</h1>
  <EniacComparison />
</div>

<!-- Compares ENIAC's room-sized installation with a modern chip. The view zooms out to reveal scale, then builds a 1,000-cube comparison; reduced-motion mode skips the zoom. -->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">A revolução da velocidade</div>
  <h1>O que muda quando o relógio bate <em>mais depressa</em>?</h1>
  <PickaxeComparison mode="frequency" />
</div>

<!-- Pickaxe speed illustrates clock frequency; each strike represents one clock tick. -->
---
layout: none
---

<div class="deck">
  <div class="eyebrow">A revolução da velocidade</div>
  <h1>E se trabalharem <em>ao mesmo tempo</em>?</h1>
  <PickaxeComparison mode="parallelism" />
</div>

<!-- Four pickaxes work on separate blocks at the same rate; a counter combines their results. -->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">Dentro do computador</div>
  <h1>Como é que funciona o <em>processador</em>?</h1>
  <ProcessorWalkthrough />
</div>

<!-- Animated walkthrough reads 7 and 5, adds them, and stores 12; pause, resume, and restart are available. -->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">Dentro do computador</div>
  <h1>Uma picareta rápida chega para trabalhar <em>depressa</em>?</h1>
  <MemoryAccessComparison />
</div>

<!-- Equal delivery rates contrast using every block with discarding alternating blocks. -->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">Dentro do computador</div>
  <h1>Como é um processador <em>por dentro</em>?</h1>
  <div style="display:flex;align-items:center;justify-content:center;gap:70px;margin-top:12px">
    <video controls playsinline preload="metadata" @keydown.stop aria-label="Ampliação de um processador de iPhone em silício" style="display:block;height:380px;max-width:45%">
      <source src="/images/processador-silicio.mp4" type="video/mp4" />
      O vídeo não pode ser reproduzido neste navegador.
    </video>
    <div style="width:360px">
      <p style="font-size:16px;color:#4b5054;margin:0 0 12px">Exemplo: iPhone 15 Pro · chip A17 Pro</p>
      <p style="font-size:43px;line-height:1.1;color:#009ee0;font-weight:700;margin:0">19 mil milhões</p>
      <p style="font-size:22px;color:#202124;margin:8px 0 32px">de transístores num chip</p>
      <p style="font-size:20px;color:#202124;margin:0 0 8px">A contar um por segundo:</p>
      <p style="font-size:36px;line-height:1.1;color:#202124;font-weight:700;margin:0">cerca de <span style="color:#009ee0">600 anos</span></p>
      <p style="font-size:20px;color:#202124;margin:32px 0 0">Como é que fazemos sentido disto?</p>
    </div>
  </div>
</div>

<!-- Chip footage contrasts with the simplified processor diagram; the A17 Pro example highlights transistor scale. -->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">Dentro do computador</div>
  <h1>Como são as instruções <em>por dentro</em>?</h1>
  <div style="display:flex;align-items:center;justify-content:center;gap:50px;margin-top:12px">
    <div style="width:450px">
      <p style="font-size:16px;color:#4b5054;margin:0 0 8px">Exemplo: encontrar o caminho mais curto</p>
      <pre style="margin:0;padding:14px 16px;background:#f2f6f8;border-radius:12px;font-size:14px;line-height:1.3;overflow:hidden"><code style="color:#202124"><span style="color:#009ee0">from</span> heapq <span style="color:#009ee0">import</span> heappop, heappush
<span style="color:#009ee0">def</span> <span style="color:#d82168">caminho_mais_curto</span>(rede, inicio, destino):
    dist = dict.fromkeys(rede, float(<span style="color:#d82168">'inf'</span>))
    dist[inicio] = <span style="color:#d82168">0</span>
    fila = [(<span style="color:#d82168">0</span>, inicio)]
    <span style="color:#009ee0">while</span> fila:
        custo, ponto = heappop(fila)
        <span style="color:#009ee0">if</span> custo != dist[ponto]:
            <span style="color:#009ee0">continue</span>
        <span style="color:#009ee0">if</span> ponto == destino:
            <span style="color:#009ee0">return</span> custo
        <span style="color:#009ee0">for</span> vizinho, distancia <span style="color:#009ee0">in</span> rede[ponto]:
            novo = custo + distancia
            <span style="color:#009ee0">if</span> novo &lt; dist[vizinho]:
                dist[vizinho] = novo
                heappush(fila, (novo, vizinho))
    <span style="color:#009ee0">return</span> float(<span style="color:#d82168">'inf'</span>)</code></pre>
    </div>
    <div style="width:360px">
      <p style="font-size:16px;color:#4b5054;margin:0 0 12px">Um programa pode ter</p>
      <p style="font-size:43px;line-height:1.1;color:#009ee0;font-weight:700;margin:0">milhões</p>
      <p style="font-size:22px;color:#202124;margin:8px 0 32px">de instruções</p>
      <p style="font-size:20px;color:#202124;margin:32px 0 0">Como sabemos se estas instruções são boas?</p>
    </div>
  </div>
</div>

<!-- Real Dijkstra code mirrors the processor slide and raises the question of software quality. -->


---
layout: none
---

<img class="template-cover" src="/template/page-3.png" alt="O que aprendeste hoje? Gostavas de saber mais? Completa, por favor, a ficha." />

<!-- Closing slide with a student reflection worksheet. -->
