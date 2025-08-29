**versao do laboratório:** 1.0.0

**Data Criaçao:** 29/08/2025

# Descrição do Laboratório

Neste laboratório vamos configurar a pasta public, onde os arquivos estáticos (ex: imagens, css) vão ficar além de configurar a biblioteca tailwind.

# Objetivos do Laboratório

Compreender :

- O que são arquivos estáticos
- A função da pasta public
- O funcionamento básico da biblioteca tailwind
- Otimização de CSS com postCSS
- Prefixos de navegador

Corrigir:

- o problema do mesmo titulo sendo enviado para todas as paginas
- o problema do style sendo enviado via head (head.ejs)

# Links para estudo e consulta

**_Pagina do tailwind_**

https://tailwindcss.com/

**_Serving static files in Express_**

https://expressjs.com/en/starter/static-files.html

**_Repositório do postcss_**

https://github.com/postcss/postcss

**_O que é o postCSS_**

https://medium.com/@neysimes/o-que-%C3%A9-o-postcss-be462abb5298

**_Pagina oficial do daisyui_**

https://daisyui.com/

**_Como vamos usar o postCSS neste projeto ?_**

Como um otimizador de CSS. O tailwind possui muitas classes que não vão ser necessariamente usadas no projeto. O postCSS analisa o código final da aplicação e gera um CSS otimizado apenas com as classes necessárias para a aplicação. Este CSS otimizado vai reduzir o tempo de processamento da página.

**\_O que faz o autoprefixer**\_

Os navegadores antigos usavam prefixos (como -webkit-, -moz-, -ms) ao implementar novas funcionalidades CSS, porque elas não eram compatíveis entre todos os browsers. O Autoprefixer é um plugin que adiciona automaticamente esses prefixos apenas onde forem necessários, garantindo compatibilidade com diferentes navegadores sem precisar escrever os prefixos manualmente.

# 1. Configurando a pasta public

crie as pastas
./public
./public/style

Acrescentar a linha de configuração da pasta public

```javascript
// configurações iniciais
app.use(morgan("dev"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./public")); //linha adicionada
```

# 2. Instalando dependencias

Neste ponto vamos instalar e configurar algumas dependencias que vão nos ajudar a otimizar o CSS que será usado pela aplicação.

Rode os comandos

`npm install --save-dev tailwindcss`

`npm install --save-dev postcss`

`npm install --save-dev @tailwindcss/postcss`

`npm install --save-dev autoprefixer`

`npm install --save-dev postcss-cli`

`npm install --save-dev daisyui`

# 3. Configure o local onde o arquivo CSS otimizado será criado

public\styles\tailwind.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

O arquivo head não deve conter tags CSS. Ele deverá usar o arquivo CSS otimizado que será criado após o processamento do post CSS. As tags que estão sendo usadas nele deverão ser tranferidas para um arquivo separado.

views\partials\head.ejs

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rota Não encontrada</title>
  <!-- Essa não é uma boa pratica de programaçao -->
  <!-- Será corrigida futuramente -->
  <link rel="stylesheet" href="/styles/cssotimizado.css" />
</head>
```

public\styles\custom.css

```css
h1,
p {
  font-size: 50px;
}
```

O arquivo main.css tem a função de unir os outro dois arquivos CSS no processo de otimização

public\styles\main.css

```css
@import "./tailwind.css";
@import "./custom.css";
```

# 3. criando os arquivo de configuração

./postcss.config.js

```javascript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
```

tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
```

# 4. Configure e rode o comando de customiz

Configure um novo comando para fazer a otimização no package.json

./package.json

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js",
    "devcss": "postcss public/styles/main.css -o public/styles/cssotimizado.css -w"

  },
```

rode o comando abaixo e verifique o arquivo cssotimizado.css foi criado

`npm run devcss`

obs: Este comando fica rodando por causa da opção -w ou seja fica verificando se houveram alterações. Mate o processo com ctrl + c

# Alterações Executadas

| Data       | Responsável   | Descrição           |
| ---------- | ------------- | ------------------- |
| 29/08/2025 | Josué Rosario | Criação do Tutorial |
