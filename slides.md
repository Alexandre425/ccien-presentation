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

<div style="padding:40px 52px;color:#202124;font-family:system-ui,sans-serif">
<p style="color:#009ee0;font-size:14px;letter-spacing:.15em">EXPERIÊNCIA · 3 MIN</p>
<h1 style="font-size:42px;line-height:1.1;margin:18px 0">Uma turma conta mais depressa<br>em equipa?</h1>
<div style="display:flex;gap:24px;margin-top:40px">
<div style="flex:1;padding:24px;background:#f2f6f8;border-radius:14px"><span style="color:#009ee0;font-size:28px">01</span><p>Uma pessoa conta a turma.</p></div>
<div style="flex:1;padding:24px;background:#f2f6f8;border-radius:14px"><span style="color:#009ee0;font-size:28px">04</span><p>Quatro grupos contam ao mesmo tempo.</p></div>
<div style="flex:1;padding:24px;background:#f2f6f8;border-radius:14px"><span style="color:#009ee0;font-size:28px">Σ</span><p>Juntamos os resultados.</p></div>
</div>
<p style="margin-top:32px;color:#4b5054;font-size:21px">O que ganhámos? O que tivemos de coordenar?</p>
</div>

<!-- Classroom activity compares one person counting everyone with four groups counting separate sections. -->

---
layout: none
---

<div style="padding:38px 52px;color:#202124;font-family:system-ui,sans-serif">
<p style="color:#009ee0;font-size:14px;letter-spacing:.15em">SUPERCOMPUTAÇÃO</p>
<h1 style="font-size:39px;margin:14px 0 20px">E se a equipa tivesse milhares de processadores?</h1>
<div style="display:flex;gap:30px;align-items:center">
<img src="/images/frontier-ornl.jpg" alt="Filas de armários do supercomputador Frontier no Oak Ridge National Laboratory" style="width:57%;height:275px;object-fit:cover;border-radius:12px" />
<div style="font-size:25px;line-height:1.4"><strong style="color:#009ee0">Um supercomputador</strong><br>junta muitos processadores para resolver problemas exigentes.</div>
</div>
<p style="font-size:12px;color:#4b5054;margin-top:10px">Frontier · Oak Ridge National Laboratory · CC BY 2.0</p>
</div>

<!-- Frontier photo introduces a supercomputer as many collaborating processors. -->

---
layout: none
---

<div style="padding:40px 52px;color:#202124;font-family:system-ui,sans-serif">
<p style="color:#009ee0;font-size:14px;letter-spacing:.15em">CIÊNCIA · METEOROLOGIA</p>
<h1 style="font-size:40px;line-height:1.12;margin:18px 0">De que serve prever amanhã<br>se o cálculo demora uma semana?</h1>
<svg viewBox="0 0 840 165" role="img" aria-label="Medições, leis da física e cálculos conduzem a uma previsão meteorológica" style="width:100%;margin-top:20px">
<rect x="4" y="25" width="220" height="110" rx="14" fill="#f2f6f8" stroke="#009ee0"/><text x="114" y="72" text-anchor="middle" fill="#202124" font-size="23">Medições</text><text x="114" y="102" text-anchor="middle" fill="#4b5054" font-size="15">atmosfera agora</text>
<path d="M235 80h55" stroke="#009ee0" stroke-width="3"/><path d="M280 70l12 10-12 10" fill="none" stroke="#009ee0" stroke-width="3"/>
<rect x="302" y="25" width="220" height="110" rx="14" fill="#f2f6f8" stroke="#009ee0"/><text x="412" y="72" text-anchor="middle" fill="#202124" font-size="23">Física + cálculo</text><text x="412" y="102" text-anchor="middle" fill="#4b5054" font-size="15">simular a evolução</text>
<path d="M533 80h55" stroke="#009ee0" stroke-width="3"/><path d="M578 70l12 10-12 10" fill="none" stroke="#009ee0" stroke-width="3"/>
<rect x="600" y="25" width="230" height="110" rx="14" fill="#f2f6f8" stroke="#009ee0"/><text x="715" y="72" text-anchor="middle" fill="#202124" font-size="23">Previsão</text><text x="715" y="102" text-anchor="middle" fill="#4b5054" font-size="15">avisar a tempo</text>
</svg>
<p style="font-size:20px;color:#4b5054">Uma previsão útil tem de chegar antes da tempestade.</p>
</div>

<!-- Diagram shows measurements and physics calculations producing a weather forecast. -->

---
layout: none
---

<div style="padding:40px 52px;color:#202124;font-family:system-ui,sans-serif">
<p style="color:#009ee0;font-size:14px;letter-spacing:.15em">CIÊNCIA · SIMULAÇÃO</p>
<h1 style="font-size:40px;margin:18px 0 30px">Podemos experimentar antes de construir?</h1>
<div style="display:flex;gap:25px">
<div style="flex:1;background:#f2f6f8;border-radius:14px;padding:22px">
<svg viewBox="0 0 120 100" role="img" aria-label="Ilustração de um foguete" style="height:96px"><path d="M60 5C38 24 40 55 42 72h36C80 55 82 24 60 5Z" fill="none" stroke="#009ee0" stroke-width="3"/><circle cx="60" cy="37" r="8" fill="none" stroke="#009ee0" stroke-width="3"/><path d="M42 60L27 76v9l15-8m36-17 15 16v9l-15-8M52 77l8 18 8-18" fill="none" stroke="#009ee0" stroke-width="3"/></svg>
<h2 style="font-size:25px;margin:6px 0">Foguetes</h2><p style="font-size:19px;color:#4b5054">Explorar o ar e o calor à volta de um veículo.</p></div>
<div style="flex:1;background:#f2f6f8;border-radius:14px;padding:22px">
<svg viewBox="0 0 120 100" role="img" aria-label="Ilustração de moléculas ligadas" style="height:96px"><path d="M25 54L57 25 91 49 73 78 25 54M57 25l16 53" fill="none" stroke="#009ee0" stroke-width="3"/><circle cx="25" cy="54" r="9" fill="#009ee0"/><circle cx="57" cy="25" r="12" fill="#009ee0"/><circle cx="91" cy="49" r="10" fill="#009ee0"/><circle cx="73" cy="78" r="11" fill="#009ee0"/></svg>
<h2 style="font-size:25px;margin:6px 0">Medicamentos</h2><p style="font-size:19px;color:#4b5054">Selecionar moléculas para investigar.</p></div>
</div>
<p style="font-size:20px;color:#009ee0;margin-top:22px">Simular ajuda a escolher experiências — não substitui testes reais.</p>
</div>

<!-- Illustrates computer simulations for rockets and medicine, alongside the need for real-world testing. -->

---
layout: none
---

<div style="padding:40px 52px;color:#202124;font-family:system-ui,sans-serif">
<p style="color:#009ee0;font-size:14px;letter-spacing:.15em">A ESCALA EXA</p>
<h1 style="font-size:39px;margin:18px 0">Quanto tempo para contar até um número com 18 zeros?</h1>
<p style="font-size:45px;white-space:nowrap;line-height:1;margin:40px 0 15px;color:#009ee0;font-weight:700">1 000 000 000 000 000 000</p>
<div v-click>
<p style="font-size:25px;margin:0">A uma operação por segundo: <strong style="color:#009ee0">≈ 31,7 mil milhões de anos</strong>.</p>
<p style="font-size:20px;color:#4b5054;margin-top:38px">1 exaFLOP/s = 10¹⁸ operações de vírgula flutuante por segundo.</p>
</div>
</div>

<!-- A click reveals the time needed to count to 10¹⁸ at one operation per second. -->

---
layout: none
---

<div style="padding:40px 52px;color:#202124;font-family:system-ui,sans-serif">
<p style="color:#009ee0;font-size:14px;letter-spacing:.15em">O DESAFIO</p>
<h1 style="font-size:40px;margin:18px 0 35px">Mais rápido chega? E a energia?</h1>
<div style="display:flex;gap:28px;align-items:center">
<div style="flex:1;background:#f2f6f8;border-radius:14px;padding:26px"><p style="font-size:61px;color:#009ee0;font-weight:700;margin:0">≈ 1,5%</p><p style="font-size:21px;line-height:1.3">da eletricidade mundial foi consumida por centros de dados em 2024.</p><p style="font-size:14px;color:#4b5054">Estimativa IEA · todos os centros de dados</p></div>
<div style="flex:1;font-size:25px;line-height:1.5"><p>Problemas maiores precisam de <strong style="color:#009ee0">mais cálculo</strong>.</p><p>A computação consome eletricidade e produz <strong style="color:#009ee0">calor</strong>.</p></div>
</div>
</div>

<!-- Connects computing demand with data-center electricity use and heat. -->

---
layout: none
---

<MemoryBottleneck />

<!-- Interactive animation compares fast and slow data delivery; controls support pause, resume, and restart. It illustrates processor waiting, not a benchmark. -->

---
layout: none
---

<div style="padding:55px 52px;color:#202124;font-family:system-ui,sans-serif">
<p style="color:#009ee0;font-size:14px;letter-spacing:.15em">O FUTURO</p>
<h1 style="font-size:51px;line-height:1.12;margin:40px 0 26px">Como podemos fazer<br><span style="color:#009ee0">mais com menos?</span></h1>
<p style="font-size:25px;color:#4b5054">Melhores previsões · saúde · energia</p>
<p style="font-size:22px;margin-top:48px;color:#009ee0">Mais resultados, menos tempo e, idealmente, menos energia.</p>
</div>

<!-- Concludes with the goal of doing more with less time and energy. -->

---
layout: none
---

<img class="template-cover" src="/template/page-3.png" alt="O que aprendeste hoje? Gostavas de saber mais? Completa, por favor, a ficha." />

<!-- Closing slide with a student reflection worksheet. -->
