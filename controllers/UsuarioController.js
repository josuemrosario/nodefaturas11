const Usuario = require('../models/UsuarioModel.js')


const obterUsuario =  (req, res) => {
  const usuario= Usuario.findOne({ email: 'joao@mail.com'})
  usuario.then((usuario)=>{
    if(usuario){
      res.render('Usuario',{mensagem:'usuario recuperado', usuario: usuario})
    }else{
      res.render('Usuario',{mensagem:'usuario nao encontrado', usuario: null})
    }
  }).catch((erro)=>{
    res.render('Usuario',{mensagem:'Erro desconhecido', usuario: null})
  })
}

const criarUsuario = async (req, res) => {

  try{
    //cria um usuário usando mongoose
    await Usuario.create({
          email: 'joao@mail.com',
          password: '1234',
    }).then((usuarioCriado)=>{
        res.render('usuario',{mensagem:'Usuario Criado',usuario: usuarioCriado}) 
    });

    

  }catch{
    
    res.render('index',{mensagem:'Ocorreu um erro'}) 

  }
}

const alterarUsuario = async (req, res) => {

  await Usuario.findOneAndUpdate(
  { email: 'joao@mail.com'}, 
  { password: 'pronto mudei'}, 
  {returnOriginal: false})

   res.render('usuario',{mensagem:'Usuario alterado', usuario: null}) 
     
}
const deletarUsuario = async (req, res) => {
  await Usuario.findOneAndDelete({ email: 'joao@mail.com'})

  res.render('usuario',{mensagem:'Usuario Deletado', usuario: null}) 
}


//Permite usar as funções fora deste modulo
module.exports =  {
    obterUsuario,
    criarUsuario,
    alterarUsuario,
    deletarUsuario,
};
