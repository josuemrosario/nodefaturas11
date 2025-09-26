const express = require('express');
const usuarioController = require('../controllers/UsuarioController.js');
const router = express.Router();


router.get('/', usuarioController.obterUsuario);
router.get('/criar', usuarioController.criarUsuario);
router.get('/alterar', usuarioController.alterarUsuario);
router.get('/deletar', usuarioController.deletarUsuario);

module.exports = router;

