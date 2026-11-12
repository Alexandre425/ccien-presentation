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

<!--
0:30 — Apresentar o tema. Lançar a pergunta orientadora e deixar a turma pensar: não precisamos de responder já.
-->

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

<!--
2:00 — Perguntar antes de revelar exemplos. Dar tempo para pensarem, pedir mãos no ar e recolher várias respostas espontâneas. Incluir objetos sem teclado ou ecrã.
-->

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

<!--
1:30 — Perguntar onde poderão existir computadores escondidos e recolher exemplos; depois revelar os objetos. Perguntar para que servem: um elevador, por exemplo, usa um controlador para responder aos botões. Reforçar que não é preciso teclado nem ecrã.
-->

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

<!--
2:00 — Perguntar onde está guardado um vídeo antes de ser reproduzido. Explicar que servidores são computadores que prestam serviços através da rede e que algumas tarefas são feitas à distância; outras acontecem no dispositivo. A fotografia mostra um centro de dados.
-->

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

<!--
1:30 — Perguntar quando um atraso vos incomodou. Relacionar a rapidez com a utilidade da resposta: num sistema de segurança, um aviso tardio pode chegar demasiado tarde. Em jogos a 60 imagens por segundo, cada imagem dura cerca de 16,7 milissegundos; isto não é a frequência do processador.
-->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">A revolução da velocidade</div>
  <h1>Um computador numa sala ou <em>na mão</em>?</h1>
  <EniacComparison />
</div>

<!--
2:00 — Mostrar o chip e perguntar quanto espaço separa os dois computadores. Revelar a escala: a linha exterior é uma sala de 9 × 15 m, não a dimensão da máquina. O cubo equivalente de cerca de 4,4 m de lado resulta de 10 × 3 × 100 pés de invólucro dos painéis, aproximadamente 85 m³; é uma estimativa grosseira de painéis empilhados, não um volume sólido medido. Fonte: https://en.wikipedia.org/wiki/ENIAC#Components . O quadrado de cerca de 1 cm representa a área aproximada do chip A17 Pro, não dimensões medidas; a ampliação não está à escala. Pedir votos: qual faz mais somas por segundo? Só então mostrar o gráfico. O ENIAC fazia cerca de 5 000 somas decimais/s. Para o A17 Pro, estimamos um máximo teórico para somas binárias independentes: 3 somas por ciclo por núcleo (hipótese, não medição) × (2 núcleos a 3,78 GHz + 4 a 2,11 GHz) ≈ 48 mil milhões/s, cerca de 9,6 milhões de vezes mais. As frequências são máximos indicados, não garantidos simultaneamente; limites térmicos, instruções e outras tarefas alteram o resultado. Não é benchmark nem comparação direta perfeita: decimal e binário são operações diferentes. Transição: ciclos e operações também não são a mesma coisa. Fotografia: U.S. Army Photo, 1946.
A vista começa junto do chip e afasta-se ao revelar a escala. As luzes dos painéis são uma ilustração esquemática, não uma reprodução histórica. A fotografia histórica aparece ao lado do gráfico. Com movimento reduzido, a sala aparece de imediato.
Depois, mostrar a pilha: cerca de 9,6 milhões de ENIACs, imaginados como cubos equivalentes, formariam um cubo de aproximadamente 935 m de lado (∛9,6 milhões × 4,4 m). A animação usa 1 000 cubos para representar o conjunto; cada cubo pequeno representa cerca de 9 600 ENIACs. Comparar a altura com os 828 m do Burj Khalifa, não o volume nem a área. Fontes: https://www.burjkhalifa.ae/the-tower/architecture-design e https://files.alnair.ae/uploads/2024/8/c6/2e/c62e9bd8bb527a17a03f6e61a6377bf2.pdf . Esta imagem depende das estimativas anteriores.
-->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">A revolução da velocidade</div>
  <h1>O que muda quando o relógio bate <em>mais depressa</em>?</h1>
  <PickaxeComparison mode="frequency" />
</div>

<!--
2:00 — Perguntar que picareta partirá mais blocos. Cada movimento representa uma batida de relógio, não uma operação real. As cadências de uma e dez batidas por segundo são ilustrativas e não representam as frequências do ENIAC ou do iPhone. Um processador a 3 GHz tem 3 mil milhões de ciclos por segundo; ciclos não são somas e o trabalho realizado em cada ciclo varia.
-->
---
layout: none
---

<div class="deck">
  <div class="eyebrow">A revolução da velocidade</div>
  <h1>E se trabalharem <em>ao mesmo tempo</em>?</h1>
  <PickaxeComparison mode="parallelism" />
</div>

<!--
2:00 — Perguntar que grupo partirá mais blocos no mesmo tempo. As quatro picaretas mantêm a mesma cadência que a picareta individual e dividem blocos independentes. O contador reúne os resultados. A animação é uma analogia idealizada: o ENIAC também executava algumas operações em paralelo, e dividir ou juntar trabalho pode demorar tempo. Nem todas as tarefas podem ser divididas. Uma terceira estratégia é escolher um método que precise de menos passos. Preparar a atividade de contagem em grupos.
-->

---
layout: none
---

<div class="deck">
  <div class="eyebrow">A revolução da velocidade</div>
  <h1>O que mudou com mais capacidade de cálculo?</h1>
  <p class="subtitle">Do passado ao presente · comparação ilustrativa</p>
  <div class="evolution">
    <div class="evolution-head">ÁREA</div><div class="evolution-head">ANTES</div><div class="evolution-head">HOJE</div>
    <strong>Jogos</strong>
    <div><svg viewBox="0 0 100 48" aria-hidden="true"><path d="M15 36h70M25 30h8v-8h8v-8h8v8h8v8h8" fill="none" stroke="#009ee0" stroke-width="5"/></svg><span>Poucos píxeis</span></div>
    <div><svg viewBox="0 0 100 48" aria-hidden="true"><path d="M8 38l23-22 18 17L65 9l27 29Z" fill="#b7e3f4" stroke="#009ee0" stroke-width="2"/><circle cx="77" cy="13" r="6" fill="#009ee0"/></svg><span>Cenários detalhados</span></div>
    <strong>Espaço</strong>
    <div><svg viewBox="0 0 100 48" aria-hidden="true"><circle cx="19" cy="30" r="12" fill="#b7e3f4"/><path d="M35 31Q53 7 78 17" fill="none" stroke="#009ee0" stroke-width="2" stroke-dasharray="4 3"/><circle cx="80" cy="17" r="4" fill="#009ee0"/></svg><span>Missões pioneiras</span></div>
    <div><svg viewBox="0 0 100 48" aria-hidden="true"><circle cx="19" cy="30" r="12" fill="#b7e3f4"/><path d="M34 30Q55 0 79 15M37 36Q61 46 83 20" fill="none" stroke="#009ee0" stroke-width="2"/><circle cx="82" cy="17" r="6" fill="#009ee0"/></svg><span>Simulações complexas</span></div>
    <strong>Tempo</strong>
    <div><svg viewBox="0 0 100 48" aria-hidden="true"><path d="M8 7h84v34H8zM36 7v34M64 7v34M8 24h84" fill="none" stroke="#009ee0" stroke-width="2"/></svg><span>Modelos menos detalhados</span></div>
    <div><svg viewBox="0 0 100 48" aria-hidden="true"><path d="M8 7h84v34H8zM20 7v34M32 7v34M44 7v34M56 7v34M68 7v34M80 7v34M8 15h84M8 24h84M8 32h84" fill="none" stroke="#009ee0" stroke-width="1.5"/></svg><span>Modelos mais detalhados</span></div>
  </div>
  <p class="small">Esquemas ilustrativos: não são imagens históricas nem previsões reais.</p>
</div>

<!--
2:00 — Perguntar que diferenças notam entre jogos antigos e atuais. Comparar também missões espaciais e previsões do tempo: com mais capacidade e melhores métodos é possível trabalhar com modelos e dados mais detalhados. As ilustrações são esquemáticas; não são capturas reais. A melhoria resulta de vários avanços, não apenas da frequência do relógio.
-->


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

<!--
10 — 3:00. Depois das três formas de acelerar, perguntar primeiro qual das duas contagens será mais rápida. Uma pessoa conta todos os alunos; cronometrar ou observar. Dividir a turma em quatro zonas sem sobreposição: uma pessoa por zona conta, simultaneamente; recolher e somar os quatro resultados. Comparar e perguntar onde houve espera ou possibilidade de erro. Se não for possível contar a turma, usar objetos ou marcas no quadro. Dividir tarefas independentes é paralelismo; juntar resultados e coordenar também custa tempo, pelo que quatro grupos não garantem uma aceleração de quatro vezes. Transição: imaginem milhares de processadores a colaborar.
-->

---
layout: none
---

<div style="padding:38px 52px;color:#202124;font-family:system-ui,sans-serif">
<p style="color:#009ee0;font-size:14px;letter-spacing:.15em">SUPERCOMPUTAÇÃO</p>
<h1 style="font-size:39px;margin:14px 0 20px">E se a equipa tivesse milhares de processadores?</h1>
<div style="display:flex;gap:30px;align-items:center">
<img src="/imagens/frontier-ornl.jpg" alt="Filas de armários do supercomputador Frontier no Oak Ridge National Laboratory" style="width:57%;height:275px;object-fit:cover;border-radius:12px" />
<div style="font-size:25px;line-height:1.4"><strong style="color:#009ee0">Um supercomputador</strong><br>junta muitos processadores para resolver problemas exigentes.</div>
</div>
<p style="font-size:12px;color:#4b5054;margin-top:10px">Frontier · Oak Ridge National Laboratory · CC BY 2.0</p>
</div>

<!--
11 — 1:30. Perguntar o que imaginam ser um supercomputador e ouvir respostas. A fotografia mostra o Frontier, no Oak Ridge National Laboratory: os armários albergam muitos componentes que colaboram, não uma única caixa mágica. Nem todos os problemas se dividem facilmente. Fotografia: Oak Ridge National Laboratory, https://commons.wikimedia.org/wiki/File:Frontier_supercomputer_(8).jpg , https://creativecommons.org/licenses/by/2.0/ ; apresentada recortada para caber no diapositivo. Transição: para que serve uma equipa destas?
-->

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

<!--
12 — 1:30. Fazer a pergunta do título antes de explicar. Recolher uma resposta: uma previsão que chega depois da tempestade não permite preparar a população a tempo. Explicar que modelos meteorológicos usam observações e leis físicas para estimar a evolução da atmosfera; são previsões, não certezas. Fonte: ECMWF, https://www.ecmwf.int/en/research/modelling-and-prediction . O esquema é original, não uma imagem da fonte. Transição: a mesma ideia de experimentar num computador também ajuda noutras áreas.
-->

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

<!--
13 — 2:00. Perguntar como testar uma ideia antes de fabricar um foguete ou desenvolver um medicamento. Explicar que simulações podem explorar o comportamento do ar em torno de veículos e ajudar a selecionar moléculas candidatas; não demonstram por si só segurança nem eficácia. Continuam a ser necessários testes físicos e experimentais. Fontes: NASA, https://www.nasa.gov/computing/hec/ ; Lin et al., https://pmc.ncbi.nlm.nih.gov/articles/PMC7144386/ . As duas ilustrações são desenhos originais esquemáticos. Transição: quanta capacidade de cálculo pode ter uma destas máquinas?
-->

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

<!--
14 — 1:00. Pedir um palpite antes de mostrar a comparação. Um exaFLOP/s corresponde a 10¹⁸ operações de vírgula flutuante por segundo. A uma operação por segundo, 10¹⁸ segundos correspondem aproximadamente a 31,7 mil milhões de anos, usando 365,25 dias por ano. O Frontier atingiu 1,102 exaFLOP/s no teste HPL em 2022; é um resultado num teste específico, não a velocidade de todas as tarefas. Fonte: TOP500, https://www.top500.org/lists/top500/2022/06/highs/ . Transição: alcançar estes resultados também tem custos.
-->

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

<!--
15 — 2:00. Perguntar se basta tornar um computador mais rápido. Ouvir propostas. Algumas simulações continuam demoradas e a eletricidade e o arrefecimento também importam. A estimativa da IEA para 2024 é de cerca de 415 TWh, aproximadamente 1,5% do consumo mundial de eletricidade: abrange todos os centros de dados, não apenas supercomputadores nem apenas IA, e é uma estimativa. Fonte: IEA, Energy and AI (2025), https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai , CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ . Transição: onde podemos procurar desperdícios dentro do próprio computador?
-->

---
layout: none
---

<MemoryBottleneck />

<!--
16 — 2:00. Perguntar primeiro: «Se o processador é rápido, porque estará parado?» Comparar Dados rápidos e Dados lentos usando os botões; pedir à turma que observe o estado do processador e o trabalho concluído. Usar Pausar/Continuar ou Reiniciar se necessário; os controlos também são acessíveis por teclado. A animação é uma analogia, não uma medição nem um benchmark: o processador pode ficar à espera dos dados. Ligar à investigação: procuro identificar obstáculos como este e melhorar software e hardware para fazer mais trabalho em menos tempo e, idealmente, com menos energia. Sem animação, comparar oralmente quatro alunos rápidos que têm de partilhar um único livro. Transição: encontrar e reduzir estes obstáculos ajuda-nos a fazer mais com menos.
-->

---
layout: none
---

<div style="padding:55px 52px;color:#202124;font-family:system-ui,sans-serif">
<p style="color:#009ee0;font-size:14px;letter-spacing:.15em">O FUTURO</p>
<h1 style="font-size:51px;line-height:1.12;margin:40px 0 26px">Como podemos fazer<br><span style="color:#009ee0">mais com menos?</span></h1>
<p style="font-size:25px;color:#4b5054">Melhores previsões · saúde · energia</p>
<p style="font-size:22px;margin-top:48px;color:#009ee0">Mais resultados, menos tempo e, idealmente, menos energia.</p>
</div>

<!--
17 — 0:30. Perguntar se preferem computadores mais rápidos ou que gastem menos energia e porquê; aceitar que depende do problema e que podemos procurar ambos. Recuperar previsão do tempo, saúde e energia. Fechar com «fazer mais com menos». Transição: abrir espaço às perguntas.
-->

---
layout: none
---

<img class="template-cover" src="/template/page-3.png" alt="O que aprendeste hoje? Gostavas de saber mais? Completa, por favor, a ficha." />

<!--
18 — 1:00. Dar tempo para dúvidas e curiosidades. Se ninguém começar, perguntar oralmente: «O que gostavas que um computador ajudasse a descobrir?» Agradecer à turma. A sequência de tempos dos diapositivos 10–18 soma 14:30; os diapositivos 1–9 do plano somam 15:30, totalizando 30:00.
-->
