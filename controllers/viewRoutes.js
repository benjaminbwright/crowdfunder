const viewRouter = require('express').Router();

viewRouter.get('/', (req, res) => {
  res.status(200).render('home');
});

viewRouter.get('/login', (req, res) => {
  res.status(200).render('login');
});

module.exports = viewRouter;
