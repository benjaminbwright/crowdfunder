const viewRouter = require('express').Router();

viewRouter.get('/', (req, res) => {
  res.status(200).render('home');
});

viewRouter.get('/login', (req, res) => {
  res.status(200).render('login');
});

viewRouter.get('/project/:id', (req, res) => {
  res.status(200).render('project-detail');
});

module.exports = viewRouter;
