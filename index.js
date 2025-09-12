const http = require('http');
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const app = express();

//importação de rotas
const usuarioRoutes = require('./routes/usuario.routes'); 


//variáveis de ambiente
require('dotenv').config();

//Conexao com o banco
require('./libs/dbConnect');

// configurações iniciais
app.use(morgan('dev'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('./public'));
const porta = Number(process.env.PORTA) || 3000


// rotas da aplicação
app.get('/', (req, res) => {
    //res.send('rota raiz'); 
    res.render('index',{mensagem:'rota raiz'}) 
});

app.get('/contato', (req, res) => {
    //res.send('rota contato');
    res.render('index',{mensagem:'rota contato'}) 
});


app.get('/sobre', (req, res) => {
    //res.send('rota sobre');
     res.render('index',{mensagem:'rota sobre'}) 
});

//rotas de usuario
app.use('/usuario', usuarioRoutes);

// Rota de erro
app.use((req, res) => {
  res.status(404).render('erro404');
});

app.listen(porta, () => {
    console.log('Servidor rodando');
    console.log('Endereco: http://localhost:'+porta);
});
