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
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
    <DinosaurFrameRate />
    <CarScanComparison />
  </div>
</div>

<!-- The game compares smooth and delayed animation; the car compares fast and slow obstacle analysis. -->

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
  <div class="eyebrow">Dentro do computador</div>
  <h1>Como é que funciona o <em>processador</em>?</h1>
  <ProcessorWalkthrough />
</div>

<!-- Animated walkthrough reads 7 and 5, joins them in the addition unit, pulses 12, and stores it; pause, resume, and restart are available. Values pass through the center of the memory unit. -->
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

<div class="deck">
  <div class="eyebrow">A minha investigação</div>
  <h1>Como perceber algo <em>tão complexo</em>?</h1>
  <p class="subtitle">Um modelo é uma versão simplificada que nos ajuda a compreender e a prever.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:20px">
    <div class="card" style="padding:16px 20px;display:flex;flex-direction:column;justify-content:space-between;gap:12px">
      <strong>Uma maquete para estudar um edifício</strong>
      <img src="/images/architectural-model.jpg" alt="Maquete de edifícios em miniatura" style="display:block;width:100%;height:200px;flex-shrink:0;object-fit:cover;object-position:center 60%;border-radius:8px" />
      <p style="margin:0">Mostra a forma e a organização, sem todos os detalhes.</p>
    </div>
    <div class="card" style="padding:16px 20px">
      <strong>Um modelo para estudar computadores</strong>
      <svg viewBox="0 0 380 150" role="img" aria-label="Um modelo do programa e do processador ajuda a compreender o desempenho e a prever o tempo de execução" style="display:block;width:100%;height:150px">
        <rect x="8" y="26" width="95" height="42" rx="8" fill="white" stroke="#202124" stroke-width="2"/>
        <rect x="8" y="86" width="95" height="42" rx="8" fill="white" stroke="#202124" stroke-width="2"/>
        <text x="55" y="52" text-anchor="middle" style="font-size:14px" fill="#202124">Programa</text>
        <text x="55" y="112" text-anchor="middle" style="font-size:14px" fill="#202124">Processador</text>
        <path d="M103 47 H125 L143 77 M103 107 H125 L143 77" fill="none" stroke="#009ee0" stroke-width="3"/>
        <rect x="143" y="51" width="90" height="52" rx="10" fill="#009ee0"/>
        <text x="188" y="83" text-anchor="middle" style="font-size:16px" font-weight="700" fill="white">Modelo</text>
        <path d="M233 77 H260 M253 70 L260 77 L253 84" fill="none" stroke="#009ee0" stroke-width="3"/>
        <text x="320" y="62" text-anchor="middle" style="font-size:13px" fill="#202124">Compreender</text>
        <text x="320" y="80" text-anchor="middle" style="font-size:13px" fill="#202124">e prever</text>
        <text x="320" y="98" text-anchor="middle" style="font-size:13px" fill="#202124">o desempenho</text>
      </svg>
      <p>Modelação de desempenho: perceber o que torna um programa rápido ou lento.</p>
    </div>
  </div>
  <p class="prompt" style="margin-top:16px">Também usamos modelos para prever o tempo atmosférico!</p>
</div>

<!-- An architectural model and a weather forecast connect familiar models to performance modelling. -->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">Modelos no mundo real</div>
  <h1>Onde mais usamos <em>modelos</em>?</h1>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:24px">
    <div class="card" style="padding:16px 20px">
      <strong>Prever o caminho de um furacão</strong>
      <img src="/images/hurricane.gif" alt="Imagem de satélite animada de um furacão" style="display:block;width:100%;height:170px;object-fit:cover;border-radius:8px;margin-top:12px" />
      <p style="font-size:17px;margin-top:12px"><span style="color:#009ee0;font-weight:700">Vento + temperatura</span> → modelo → caminho provável</p>
    </div>
    <div class="card" style="padding:16px 20px">
      <strong>Perceber o movimento dos planetas</strong>
      <PlanetOrbits />
      <p style="font-size:17px;margin-top:12px"><span style="color:#009ee0;font-weight:700">Sol + planetas</span> → órbitas → prever posições</p>
    </div>
  </div>
  <p class="prompt" style="margin-top:18px">O que podemos aprender sem reproduzir todos os detalhes?</p>
</div>

<!-- Satellite imagery introduces weather models; a simplified orbital diagram shows another way to understand and predict. -->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">A minha investigação</div>
  <h1>Como é que modelamos um <em>processador</em>?</h1>
  <div style="display:grid;grid-template-columns: 0.9fr 1.1fr;gap:28px;align-items:center;margin-top:18px;color:#202124">
    <div>
      <p style="font-size:22px;font-weight:700;margin:0 0 12px">Modelo Roofline / do Telhado</p>
      <p style="font-size:18px;margin:0 0 20px">Uma equação muito simples para descrever o sistema todo.</p>
      <div style="background:#f2f6f8;border-radius:12px;padding:18px;font-size:20px;line-height:1.6">
        <strong style="color:#202124">Velocidade = mínimo entre</strong><br />
        <span style="color:#009ee0">velocidade do processador</span><br />
        <strong style="color:#202124">ou</strong><br />
        <span style="color:#d82168">chegada de dados × trabalho por dado</span>
      </div>
      <p style="font-size:17px;margin:18px 0 0">O limite mais baixo ganha.</p>
    </div>
    <div>
      <svg viewBox="0 0 500 340" role="img" aria-label="Gráfico Roofline: a velocidade aumenta com o trabalho por dado até atingir o limite do processador. Antes disso, a chegada de dados limita a velocidade." style="display:block;width:100%">
        <text x="19" y="25" fill="#202124" style="font-size:17px" font-weight="700">Velocidade</text>
        <text x="19" y="45" fill="#202124" style="font-size:15px">do programa ↑</text>
        <path d="M65 65 V275 H470" fill="none" stroke="#202124" stroke-width="2"/>
        <path d="M65 260 L280 95" fill="none" stroke="#d82168" stroke-width="5" stroke-linecap="round"/>
        <path d="M280 95 H450" fill="none" stroke="#009ee0" stroke-width="5" stroke-linecap="round"/>
        <text x="295" y="75" fill="#009ee0" style="font-size:16px" font-weight="700">Limite do processador</text>
        <text x="90" y="105" fill="#d82168" style="font-size:16px" font-weight="700">Limite dos dados</text>
        <text x="90" y="126" fill="#202124" style="font-size:14px">À espera de blocos</text>
        <text x="315" y="123" fill="#202124" style="font-size:14px">Picareta no máximo</text>
        <text x="265" y="310" text-anchor="middle" fill="#202124" style="font-size:16px" font-weight="700">Mais trabalho por dado →</text>
      </svg>
    </div>
  </div>
</div>

<!-- Roofline connects the processor and data delivery limits to the earlier pickaxe and block analogy. -->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">A minha investigação</div>
  <h1>Qual programa aproveita melhor os <em>dados</em>?</h1>
  <RooflinePrograms />
</div>

<!-- Equal block delivery contrasts a processor-limited program with a data-limited program on the roofline. -->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">A minha investigação</div>
  <h1>Este programa pode ser <em>mais rápido</em>?</h1>
  <div class="efficiency-example">
    <div>
      <p class="subtitle">E se deitarmos blocos fora?</p>
      <MemoryAccessComparison class="efficiency-animation" aria-label="Programa que deita fora alguns blocos recebidos da memória" />
    </div>
    <svg viewBox="0 0 400 300" role="img" aria-label="O programa está abaixo do limite dos dados no gráfico do telhado. A distância até ao limite mostra que pode haver margem para melhorar.">
      <text x="12" y="22" class="efficiency-axis">Velocidade ↑</text>
      <path d="M45 36 V245 H382" fill="none" stroke="#202124" stroke-width="2" />
      <path d="M45 230 L252 70" fill="none" stroke="#d82168" stroke-width="4" stroke-linecap="round" />
      <path d="M252 70 H372" fill="none" stroke="#009ee0" stroke-width="4" stroke-linecap="round" />
      <text x="260" y="51" class="efficiency-roof">Processador</text>
      <text x="75" y="103" class="efficiency-data">Dados</text>
      <path d="M125 195 V174 M119 182 L125 174 L131 182" fill="none" stroke="#202124" stroke-width="2" stroke-dasharray="2 1" />
      <circle cx="125" cy="205" r="8" fill="#d82168" stroke="white" stroke-width="2" />
      <text x="125" y="228" text-anchor="middle" class="efficiency-label">Este programa</text>
      <text x="235" y="150" text-anchor="middle" class="efficiency-label">Pode ser</text>
      <text x="235" y="169" text-anchor="middle" class="efficiency-label">mais rápido!</text>
      <text x="211" y="275" text-anchor="middle" class="efficiency-axis">Mais trabalho por bloco →</text>
    </svg>
  </div>
  <p class="prompt" style="margin-top:12px">O modelo mostra a margem para melhorar.</p>
</div>

<!-- The discarded-block animation revisits slide 10; a point below the roof shows room to improve. -->


---
layout: none
---

<img class="template-cover" src="/template/page-3.png" alt="O que aprendeste hoje? Gostavas de saber mais? Completa, por favor, a ficha." />

<!-- Closing slide with a student reflection worksheet. -->
