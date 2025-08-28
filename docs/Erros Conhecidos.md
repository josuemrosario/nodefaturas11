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
