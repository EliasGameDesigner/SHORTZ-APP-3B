var express = require('express');
var router = express.Router();

//requisicao get para acessar a pagina inicial
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bem Vindo' });
});


router.get('/register', function(req, res, next) {
  res.render('register', {title : 'Criar conta'});
});



const userController = require('../modules/user/userControler');
//requisicao POST para processar o form de cadastro

router.post('/register', userController.register);

module.exports = router;

