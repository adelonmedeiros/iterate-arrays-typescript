# Exemplos de iterações com TypeScript

No TypeScript é necessário definir o tipo dos parâmetros da função nos métodos forEach, map e filter, enquanto no JavaScript isso não é necessário. Além disso, é possível utilizar outras funcionalidades do TypeScript, como interfaces e tipos genéricos, para aumentar a segurança e clareza do código.

# Compilar os arquivos TypeScript

Para compilar um arquivo TypeScript em uma pasta específica, você pode passar o caminho completo do arquivo para o comando tsc no terminal.

Por exemplo, suponha que você tenha um arquivo index.ts localizado na pasta src. Para compilá-lo para a pasta dist, você pode executar o seguinte comando no terminal:

tsc src/index.ts --outDir dist

# Executar os arquivos JavaScript

Para executar um arquivo JavaScript, você pode passar o caminho completo do arquivo para o comando node no terminal.

Por exemplo, suponha que você tenha um arquivo index.js localizado na pasta dist. Para executá-lo, você pode executar o seguinte comando no terminal:

node dist/index.js
