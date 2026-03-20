module.exports = (req, res, next) => {
    if (req.session.user){
        return next();
    }

    req.flash('error',  'voce precisa estar logando para acessar esta pagina');
    res.redirect('/login');
}; 