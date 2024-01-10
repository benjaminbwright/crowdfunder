const viewRouter = require('express').Router();
const { Project, User } = require('../models');

viewRouter.get('/', async (req, res) => {
  const projectsData = await Project.findAll();

  console.log(projectsData);

  res.status(200).render('home');
});

viewRouter.get('/login', (req, res) => {
  res.status(200).render('login');
});

module.exports = viewRouter;
