# A ciência por trás de um computador rápido

Este projeto contém um diapositivo Slidev interativo em português europeu. A animação é uma analogia: um processador rápido pode esperar pelos dados. Não representa uma medição nem todos os computadores ou tarefas.

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

As capturas dos dois modos, em 1920×1080 e 1280×720, ficam em `artifacts/`. Os ficheiros gerados não entram no controlo de versões.

Os botões **Dados rápidos** e **Dados lentos** alteram a chegada dos dados. Use **Pausar** e **Continuar** para controlar a animação. Use **Reiniciar** para voltar ao início do modo escolhido.

## Apresentar sem Internet

Execute `pnpm build` antes de ficar sem Internet. Sirva o diretório `dist/` com um servidor HTTP local. Por exemplo, com Python 3:

```sh
python3 -m http.server 8000 --directory dist
```

Abra `http://localhost:8000/` no navegador. A apresentação usa recursos locais e não precisa de Internet durante a apresentação.
