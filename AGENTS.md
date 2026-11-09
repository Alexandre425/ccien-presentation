# Convenções para agentes

## Âmbito e manutenção

- O objetivo é uma apresentação Slidev de um único diapositivo, em pt-PT. Preserve esse âmbito e o idioma em toda a interface visível.
- Mantenha o conteúdo dos diapositivos em `slides.md` e o comportamento visual reutilizável em componentes Vue.
- Preserve o tema visual nos diapositivos futuros. Evite dependências desnecessárias.
- Mantenha os recursos necessários à apresentação locais para permitir a utilização offline. Não acrescente dependências de CDN nem recursos remotos.
- Atualize o README quando alterar os passos de instalação, desenvolvimento, compilação, testes, captura de ecrã ou apresentação offline.

## Componente e interação

- `components/MemoryBottleneck.vue` contém o conteúdo e os controlos deste diapositivo.
- Use Vue com TypeScript e SVG para a visualização. Mantenha o diagrama compreensível e as interações acessíveis por teclado e com nomes acessíveis estáveis.
- A animação é uma analogia explicativa, não um benchmark nem uma simulação quantitativa. Mantenha a sua evolução determinística; pausar/continuar e reiniciar devem funcionar de forma previsível, e reiniciar deve restaurar o estado inicial.
- Preserve os nomes acessíveis dos controlos e os seletores de estado `data-testid` estabelecidos pelos testes. Ao alterar um contrato, atualize os testes correspondentes em conjunto.

## Verificação e artefactos

- Use pnpm via Corepack e respeite o lockfile: `pnpm install --frozen-lockfile`.
- Para cada alteração visual, compile, abra no navegador, capture imagens, inspecione e corrija os problemas.
- Execute `pnpm build`, `pnpm test` e `pnpm screenshot` quando forem relevantes. As capturas ficam em `artifacts/`.
- Não inclua capturas geradas nem outros artefactos de build no controlo de versões, salvo pedido explícito.
- O build estático deve poder ser servido localmente para uma apresentação sem Internet. Verifique que os recursos necessários não dependem da rede.
- Se criar commits, mantenha cada commit pequeno e limitado a uma alteração coerente.
