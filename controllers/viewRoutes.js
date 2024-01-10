const viewRouter = require('express').Router();
const { Project, User } = require('../models');

viewRouter.get('/', async (req, res) => {
  const projectsData = await Project.findAll({
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  });

  const projects = projectsData.map((datum) => datum.get({ plain: true }));

  res.status(200).render('home', { projects });
});

viewRouter.get('/login', (req, res) => {
  res.status(200).render('login');
});

viewRouter.get('/project/:id', (req, res) => {
  res.status(200).render('project-detail');
});

module.exports = viewRouter;
