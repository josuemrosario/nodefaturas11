# PROBLEMAS E ERROS CONHECIDOS

Use essa referência para encontrar erros que foram encontrados ao ministrar as aulas usando os tutoriais deste projeto

## Erro de permissão do Powershell

**_Descrição :_**

Um erro de permissão é mostrado ao executar qualquer comando node ou npm na linha de comando.

O problema ocorrer porque está sendo utilizado o powershell como shell de linha de comando, que não permite a execução de scripts. Ou seja é necessário rodar um comando para autorizar explicitamente a execução

**_Erro:_**

**_Possíveis Soluções_**

1. Executar o comando

`Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser`

obs: A executação deste comnado será necessária apenas uma vez por computador. O problema geralmente vai ocorrer após formatação.

## Servidor não sobe

**_Descrição :_** Ao executar node index nada acontece, a linha de comando volta vazia

**_Possíveis Soluções_**

1. Confirmar se existe um server.listen ou app.listen no arquivo index.js

## Cannot find Module 'xxxx'

**_Erro:_** Cannot find Module 'xxxx'

**_Descrição :_** um módulo que está sendo solicitado pelo require não está instalado.

**_Possíveis Soluções_**

1. Verificar o módulo mostrado no erro está instalado

Alternativa 1 - Verifique se o módulo está mostrado como dependencia dentro do arquivo package.json.

Alternativa 2 - Rode o comando abaixo para mostrar tudo que foi instalado (sem subdependencias) com o npm

`npm list --depth=0`

## listen EADDRINUSE: address already in use

**_Descrição :_** Ao tentar rodar o servidor (ex.: npm index) ocorre erro EADDINUSE. Este erro informa que a porta sendo utilizada já está em uso

**_Erro:_**

Error: listen EADDRINUSE: address already in use :::3000

**_Possíveis Soluções_**

1. verificar se o servidor já está rodando em outra linha de comnado
2. A porta escolhida está em uso por outro processo desconhecido. Tente alterar a posta que o servidor tenta usar.

## Failed to lookup view "xxxx"

**_Descrição :_** Ao tentar acessar uma view ocorre o erro failed to look view seguido pelo nome da view

**_Exemplo de Erro_**

```
Error: Failed to lookup view "naoexiste" in views directory "./views"
    at Function.render (C:\Users\josue.rosario\Documents\nodefaturas\node_modules\express\lib\application.js:562:17)
```

**_Possíveis Soluções_**

1. Verificar se a view está sendo chamada com o nome correto

```javascript
app.get("/", (req, res) => {
  //res.send('rota raiz');
  res.render("naoexiste", { mensagem: "rota raiz" });
});
```

2. Verificar se a view existe dentro da pasta de views

## Cannot set headers after they are sent to the client

**_Exemplo de Erro_**

[ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

**_Possíveis Soluções_**

1. Depois que o servidor envia o response nada mais pode ser executado. Verifique se existe um render ou send seguido.

Exemplo:

```javascript
// rotas da aplicação
app.get("/", (req, res) => {
  res.send("rota raiz"); // essa é a resposta
  res.render("index", { mensagem: "rota raiz" }); //essa é uma resposta depois da resposta
});
```
