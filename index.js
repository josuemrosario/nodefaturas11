const http = require('http');
const porta = 3000
const express = require('express');
const morgan = require('morgan');
const app = express();

// configurações iniciais
app.use(morgan('dev'));


// rotas da aplicação
app.get('/', (req, res) => {
    res.send('rota raiz');
});

app.get('/contato', (req, res) => {
    res.send('rota contato');
});


app.get('/sobre', (req, res) => {
    res.send('rota sobre');
});


// Rota de erro
app.use((req, res) => {
  res.status(404).send("Página não encontrada!");
});

app.listen(porta, () => {
    console.log('Servidor rodando');
    console.log('Endereco: http://localhost:' + porta);
});
