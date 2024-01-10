const viewRouter = require('express').Router();

viewRouter.get('/', (req, res) => {
  res.status(200).render('home');
});

module.exports = viewRouter;
