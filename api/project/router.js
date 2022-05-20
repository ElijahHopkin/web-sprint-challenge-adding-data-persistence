// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model')


const projectsRouter = express.Router();


projectsRouter.get('/', (req, res, next) => {
    Projects.getAll()
        .then(result => {
            res.json(result)
            // if(result.project_completed===0) {
            //    res.json({
            //             project_name: result.project_name,
            //             project_description: result.project_description,
            //             project_completed: result.project_completed
            //         })
            // }else{
            //        res.json({
            //         project_name: result.project_name,
            //         project_description: result.project_description,
            //         project_completed: 'true'
            //        })
            //    }
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