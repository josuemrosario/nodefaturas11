# Node Faturas

Este projeto está sendo criado para ser utilizado em aulas da Unidade Curricular de back-end.

## Começando

A pasta docs reúne os tutoriais que descrevem, passo a passo, a construção do sistema.
Os commits são organizados por tutorial e por projeto. Isso significa que o aluno pode baixar um commit correspondente ao estado do projeto ao final da última aula, junto com o tutorial que deverá ser seguido na próxima.

Dessa forma, se o aluno tiver perdido a aula anterior, ou se o professor quiser garantir que todos iniciem com o mesmo código padrão, basta baixar o commit da última aula. Assim, o código estará sincronizado e acompanhado do tutorial seguinte.

Observe os nomes de commit e baixe o commit específico em arquivo ZIP para obter o projeto no estado em que se encontrava antes da implementação.


### Pré-requisitos

1. O ambiente node deve estar instalado. Se ainda não está instalado baixe o ambiente e instale em https://nodejs.org/pt

2. O mongoDB precisa estar instalado localmente. Apesar disto é possível configurar para rodar a partir da nuvem

### Instalação


1. Baixe o commit específico que você deseja.
2. Instale todas as dependencias

```
npm i
```

3. Faça uma copia do arquivo .env.example e renomeie para .env
4. Altere as configurações do arquivo .env

| VARIAVEL | DESCRIÇÃO |
|----------|----------|
|PORTA |Porta em que a aplicação vai rodar|

5. 'Compile' o CSS

```
npm run devcss
```

6. Abra um novo terminal e rode abrir_mongo.bat

```
.\abrir_mongo.bat
```

7. Rode o projeto

```
npm run dev
```
## Tecnologias utilizadas neste projeto

* node
* Javascript
* Tailwind, DaisyUI
* PostCSS
* Express
* Morgan
* MongoDB
* Mongoose