# Convenções para agentes

## Âmbito e manutenção

- A apresentação final destina-se a alunos do 8.º ano, com 13–14 anos. Tem a duração prevista de 30 minutos e 18 diapositivos.
- Siga `plano_apresentacao_ciencia_computador_rapido.md` para a estrutura, os conteúdos e as atividades da apresentação.
- O objetivo é despertar curiosidade sobre os computadores do quotidiano. Mostre porque importa a velocidade e como a investigação pode melhorar o desempenho e a eficiência.
- A mensagem principal vai além dos jogos: computadores melhores ajudam a compreender o mundo e a resolver problemas reais. Termine com a ideia «fazer mais com menos».
- O projeto contém atualmente um diapositivo de teste sobre a espera pelos dados. Não confunda o âmbito deste protótipo com o objetivo da apresentação final.
- Use português europeu em todo o texto visível ao público.
- Mantenha o conteúdo dos diapositivos em `slides.md` e o comportamento visual reutilizável em componentes Vue.
- Preserve o tema visual nos diapositivos futuros. Evite dependências desnecessárias.
- Mantenha os recursos necessários à apresentação locais para permitir a utilização offline. Não acrescente dependências de CDN nem recursos remotos.

## Orientações pedagógicas

- Faça perguntas antes de explicar conceitos. Inclua as pequenas atividades previstas no plano.
- Apresente uma ideia clara por diapositivo. Prefira imagens, números legíveis e pouco texto.
- Explique a computação através de exemplos familiares, ciência e problemas reais. Converta números grandes em comparações reconhecíveis.
- Distinga analogias de medições. Não confunda ciclos com operações nem apresente resultados de testes como velocidades de todas as tarefas.
- Apresente a investigação pessoal como uma resposta aos limites de desempenho e energia. Evite detalhes técnicos desnecessários na exposição principal.
- Verifique os números, as fontes e as licenças dos materiais antes da apresentação. Prepare uma alternativa sem vídeo nem Internet.

## Componente e interação

- `components/MemoryBottleneck.vue` contém o conteúdo e os controlos deste diapositivo.
- Use Vue com TypeScript e SVG para a visualização. Mantenha o diagrama compreensível e as interações acessíveis por teclado e com nomes acessíveis estáveis.
- A animação é uma analogia explicativa, não um benchmark nem uma simulação quantitativa. Mantenha a sua evolução determinística; pausar/continuar e reiniciar devem funcionar de forma previsível, e reiniciar deve restaurar o estado inicial.
- Utilize sempre técnicas de animação apelativas. Easing, bounces, e outros.
- Preserve os nomes acessíveis dos controlos. Verifique as interações por inspeção e com feedback dos utilizadores.

## Verificação e artefactos

- Use pnpm via Corepack e respeite o lockfile: `pnpm install --frozen-lockfile`.
- Verifique as alterações por inspeção no navegador e recolha feedback dos utilizadores. Teste também a navegação por teclado e os estados interativos afetados.
- Para inspeção sem interface gráfica, inicie `corepack pnpm dev` e use a ferramenta de navegador em modo headless. Navegue pelos diapositivos e teste os controlos afetados.
- Capture e inspecione imagens com a ferramenta de navegador. Aguarde que o diapositivo e os estados necessários estejam visíveis antes de capturar.
- Não instale uma ferramenta de testes de navegador no projeto para estas verificações. O feedback dos utilizadores complementa a inspeção.
- Para cada alteração visual, compile, abra no navegador, capture imagens, inspecione e corrija os problemas.
- Execute `pnpm build` quando for relevante. Guarde as capturas em `artifacts/`.
- Não inclua capturas geradas nem outros artefactos de build no controlo de versões, salvo pedido explícito.
- O build estático deve poder ser servido localmente para uma apresentação sem Internet. Verifique que os recursos necessários não dependem da rede.
- Se criar commits, mantenha cada commit pequeno e limitado a uma alteração coerente.

## Regras de estilo

- Não usar tipos de letra serifadas.
- Limitar o uso de cores a uma paleta reduzida.
- Use fundo branco, texto preto ou cinzento-escuro e azul `#009ee0` para os destaques. Se for necessário contraste adicional, use apenas `#d82168` e `#fbd20a`.
- Use a página 1 do PDF do modelo na abertura, a página 3 no encerramento e, sempre que possível, a página 2 como fundo dos diapositivos. Mantenha os conteúdos legíveis sobre o fundo.
- Uma ideia chave por diapositivo.
- Evitar texto corrido. Comunicar ideias com imagens, o resto é falado.