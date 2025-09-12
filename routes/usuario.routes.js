const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index',{mensagem:'get /usuario'}) 
});

router.get('/criar', (req, res) => {
    res.render('index',{mensagem:'get /usuario/criar'}) 
});
router.get('/deletar', (req, res) => {
    res.render('index',{mensagem:'get /usuario/deletar'}) 
});

module.exports = router;

