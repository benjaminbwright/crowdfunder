const viewRouter = require('express').Router();
const { Project, User } = require('../models');

viewRouter.get('/', async (req, res) => {
  const projectsData = await Project.findAll();

  console.log(projectsData);

  res.status(200).render('home');
});

module.exports = viewRouter;
