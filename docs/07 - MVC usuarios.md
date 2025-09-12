**versao do laboratório:** 1.0.0

**Data Criaçao:** 11/09/2025

# Descrição do Laboratório

Neste laboratório vamos colocar o projeto no padrão MVC e criar o objeto usuário

# Objetivos do Laboratório

Compreender :

- padrão MVC
- Schema
- Configuração de schema e model usando mongoose
- Configuração de arquivos de Rotas

# Links para estudo e consulta

**_Pagina oficial do Mongoose_**

https://mongoosejs.com/

**_Schemas_**

https://mongoosejs.com/docs/api/schema.html

**_Models_**

https://mongoosejs.com/docs/api/model.html

# 1. Configurar a Rota usuários

Adicionar o routes

```javascript
const http = require("http");
const express = require("express");
const router = express.Router(); // linha adicionada
const morgan = require("morgan");
const app = express();
```

criar o arquivo de rotas de usuário

routes\usuario.routes.js

```javascript
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { mensagem: "get /usuario" });
});

router.get("/criar", (req, res) => {
  res.render("index", { mensagem: "get /usuario/criar" });
});
router.get("/deletar", (req, res) => {
  res.render("index", { mensagem: "get /usuario/deletar" });
});

module.exports = router;
```

importar o arquivo dentro do entry point

index.js

```javascript
const http = require("http");
const express = require("express");
const router = express.Router();
const morgan = require("morgan");
const app = express();

//importação de rotas
const usuarioRoutes = require("./routes/usuario.route"); //linha adicionada
```

configurar a rota /usuario para chamar o arquivo de rotas

```javascript
//rotas de usuario
app.use("/usuario", usuarioRoutes); // linha adicionada

// Rota de erro
app.use((req, res) => {
  res.status(404).render("erro404");
});
```

obs: Observe e o use da rotas foi colocado antes da rota de erro

# 2. Configurar a Rota usuários

# Alterações Executadas

| Data       | Responsável   | Descrição           |
| ---------- | ------------- | ------------------- |
| 29/08/2025 | Josué Rosario | Criação do Tutorial |
