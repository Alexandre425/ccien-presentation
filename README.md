# A ciência por trás de um computador rápido

Esta apresentação Slidev em português europeu tem 18 diapositivos para uma sessão de cerca de 30 minutos com alunos do 8.º ano. As notas do apresentador incluem tempos e perguntas. No diapositivo 16, a animação interativa é uma analogia: um processador rápido pode esperar pelos dados. Não representa uma medição nem todos os computadores ou tarefas.

O primeiro e o último diapositivos reproduzem as páginas 1 e 3 de `template.pdf`; a página 2 serve de fundo aos diapositivos de conteúdo. As imagens rasterizadas em `public/template/` são locais. Os diapositivos de conteúdo mostram a sua posição na sequência de 18; as páginas de abertura e fecho permanecem sem sobreposições.

## Requisitos e instalação

Use Node.js 20.20.2 ou uma versão superior compatível e o Corepack. O ficheiro `.node-version` indica a versão usada neste projeto.
O Slidev está fixado na versão 52.20.1 para manter a compatibilidade com Node.js 20. A versão mais recente do Slidev exige Node.js 22.22.0 ou superior.
Os testes usam Python 3 para servir a compilação estática.

```sh
corepack pnpm install --frozen-lockfile
```

Pode usar `corepack pnpm` em vez de `pnpm` nos comandos seguintes. Para instalar um navegador de teste na conta atual, execute `corepack pnpm exec playwright install chromium`. Se já existir um executável Chromium compatível, defina `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` com o respetivo caminho.

## Executar e testar

```sh
pnpm dev         # abrir o endereço local indicado
pnpm build       # criar a apresentação estática em dist/
pnpm test        # testar a apresentação estática; execute build primeiro
pnpm screenshot  # criar capturas; execute build primeiro
```

As capturas do início, da transição de zoom, da escala, do gráfico e da pilha de ENIACs do diapositivo 6, em 1920×1080, e dos dois modos do diapositivo 16, em 1920×1080 e 1280×720, ficam em `artifacts/`. Os ficheiros gerados não entram no controlo de versões.

No diapositivo 6, use **Revelar a escala**, peça uma votação e use **Mostrar comparação**; depois use **Imaginar 9,6 milhões**. **Reiniciar** regressa à pergunta inicial. Os botões funcionam por teclado; com movimento reduzido, as transições e a animação ficam desativadas. A mesma cena afasta-se gradualmente: o cubo inspirado nos painéis do ENIAC representa um volume equivalente aproximado, não um volume medido. A sala mede aproximadamente 9 × 15 m, não a máquina. O chip é representado por um quadrado equivalente de cerca de 1 cm de lado, não por dimensões medidas; a ampliação não está à escala. O gráfico tem escala linear: o valor do ENIAC é tão pequeno que é assinalado por uma seta junto à base, sem altura mínima artificial.

O valor do A17 Pro é uma estimativa teórica para somas inteiras binárias independentes, não um benchmark nem uma previsão para todas as tarefas. Assume-se, sem medição específica do A17 Pro, três somas por ciclo em cada núcleo e todos os núcleos à frequência máxima em simultâneo: 3 × (2 × 3,78 + 4 × 2,11) ≈ 48 mil milhões de somas/s. Dividindo pelas cerca de 5 000 somas decimais/s do ENIAC, obtêm-se aproximadamente 9,6 milhões; operações decimais e binárias não são diretamente equivalentes. Limites de energia, temperatura, instruções e carga podem reduzir o desempenho real.

O cubo do ENIAC representa aproximadamente 85 m³, não um volume sólido medido. O cálculo usa o invólucro frequentemente referido dos painéis: 10 pés de altura × 3 pés de profundidade × 100 pés de comprimento total, como se estivessem empilhados; a raiz cúbica dá cerca de 4,4 m de lado. Fonte das dimensões: [ENIAC, componentes](https://en.wikipedia.org/wiki/ENIAC#Components). A projeção é esquemática.

A pilha hipotética usa ∛(9,6 milhões) × 4,4 m ≈ 935 m de lado. A grelha é ilustrativa, não desenha cada computador; a comparação com o Burj Khalifa usa apenas a altura, 828 m ([fonte oficial](https://www.burjkhalifa.ae/the-tower/architecture-design)). O cálculo herda as incertezas da estimativa de desempenho e do volume equivalente.

No diapositivo 16, os botões **Dados rápidos** e **Dados lentos** alteram a chegada dos dados. Use **Pausar** e **Continuar** para controlar a animação. Use **Reiniciar** para voltar ao início do modo escolhido.

Nos diapositivos 3, 9 e 14, avance uma vez para revelar as respostas depois da pergunta. Após usar os controlos do diapositivo 16, use a seta «Go to next slide» da barra do Slidev para continuar.

## Apresentar sem Internet

Execute `pnpm build` antes de ficar sem Internet. Sirva o diretório `dist/` com um servidor HTTP local. Por exemplo, com Python 3:

```sh
python3 -m http.server 8000 --directory dist
```

Abra `http://localhost:8000/` no navegador. A apresentação usa recursos locais e não precisa de Internet durante a apresentação.

## Créditos e fontes

- ENIAC: [U.S. Army Photo, 1946](https://commons.wikimedia.org/wiki/File:Classic_shot_of_the_ENIAC_(full_resolution).jpg), domínio público nos EUA; imagem apresentada com recorte.
- Silhueta do Burj Khalifa: [OpenClipart via FreeSVG](https://freesvg.org/burjkhalifa), domínio público (CC0); imagem PNG local.
- A17 Pro: [Apple](https://support.apple.com/en-us/111829), configuração de dois núcleos de desempenho e quatro de eficiência; [Notebookcheck](https://www.notebookcheck.net/Apple-A17-Pro-Processor-Benchmarks-and-Specs.756287.0.html), frequências máximas e área de cerca de 113 mm²; [HMC](https://hmc-tech.com/cpus/apple-a17-pro), cerca de 104 mm². Estas fontes de terceiros divergem na área do chip completo: o desenho arredonda para um quadrado equivalente de cerca de 1 cm de lado, sem afirmar dimensões físicas medidas.
- Servidores: [Carl Lender, *Datacenter Server Racks*](https://commons.wikimedia.org/wiki/File:Datacenter_Server_Racks_(22370909788).jpg), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/); versão reduzida e apresentada com recorte.
- Frontier: [Oak Ridge National Laboratory](https://commons.wikimedia.org/wiki/File:Frontier_supercomputer_(8).jpg), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/); imagem apresentada com recorte.
- Os desenhos e símbolos dos diapositivos são esquemáticos; não são fotografias nem simulações científicas. As fotografias são ficheiros locais.
- ENIAC: [Centre for Computing History](https://www.computinghistory.org.uk/det/6137/ENIAC-is-announced/), valores aproximados de massa e operações; [University of Pennsylvania](https://almanac.upenn.edu/archive/v42/n18/eniac.html), contexto histórico.
- Para os dados históricos e científicos e as referências da segunda metade, consulte as fontes indicadas no [plano](plano_apresentacao_ciencia_computador_rapido.md). Os 3 GHz são um exemplo de frequência, não uma medição de operações.
