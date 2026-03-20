var express = require('express');
var router = express.Router();
const userController = require('../modules/user/userControler');
const authMiddleware = require('../middlewares/auth');
const upload = require('../middlewares/multer');
const auth = require('../middlewares/auth');


//requisicao get para acessar a pagina inicial
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bem Vindo' });
});


router.get('/register', function(req, res, next) {
  res.render('register', {title : 'Criar conta'});
});

//requisicao POST para processar o form de cadastro

router.post('/register', userController.register);

router.post('/login', userController.login);

// Rota para processar o logout
router.get('/logout', userController.logout);


router.get('/login', (req, res) => {
  res.render('login', {title: 'Entrar'});
})

// Rota para exibir o feed de vídeos (protegida por autenticação)
router.get('/feed', authMiddleware, async (req, res) => {
    const user = await userController.getProfile(req.session.user.id);
    res.render('home', { user });
});

router.get('/profile/edit', authMiddleware, async (req, res) =>{
  const user = await userController.getProfile(req.session.user.id);

  res.render('edit-profile', {user});
});

// Rota de atualização (Protegida + Upload de 1 arquivo chamado 'profilePicture')
router.post('/profile/edit', authMiddleware, upload.single('profilePicture'), userController.updateProfile);

module.exports = router;
