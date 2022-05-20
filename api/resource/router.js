// build your `/api/resources` router here
const express = require('express');
const Projects = require('./model')


const projectsRouter = express.Router();


projectsRouter.get('/', (req, res, next) => {
    Projects.getAll()
        .then(result => {
            res.json(result)
        })
        .catch(next)
})

projectsRouter.post('/', (req, res, next) => {
    Projects.postProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})


module.exports=projectsRouter;