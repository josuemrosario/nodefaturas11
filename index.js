// importações de bibliotecas e configurações básicas
const http = require("http");
const porta = 3000;

// Criação do servidor
const server = http.createServer((req, res) => {
  url = req.url;
  console.log("url: ", url); //rota solicitada

  //Rotas da aplicação
    if(url === '/') {
        res.end('Rota raiz');
    } else if (url === '/contato') {
        res.end('Pagina de contato');
    } else if (url === '/sobre') {
        res.end('Pagina sobre');
    } else {
        res.writeHead(404) //rota nao cadastrada
        res.end('Rota nao cadastrada');
    }


});

// Coloca o servidor no ar
server.listen(porta, () => {
  console.log("Servidor rodando");
  console.log("Endereco: http://localhost:" + porta);
});