// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');




const projectsRouter = express.Router();


projectsRouter.get('/', (req, res, next) => {
    Projects.getAll()
        .then(results => {
            res.json(results.map(result => {
                if(result.project_completed===0) {
                    return({...result, project_completed: false })
                }else{
                    return({...result, project_completed: true })
                }
            }))
        })
        .catch(next)
})

projectsRouter.post('/', (req, res, next) => {
    if(req.body.project_completed && typeof req.body.project_completed!='boolean'){
        res.status(400).json({message: 'project_completed must be true, false, or left to default'})
    }
    Projects.postProject(req.body)
        .then(result => {
            res.status(201).json({...result, project_completed: result.project_completed===0? false: true})
        })
        .catch(next)
})


module.exports=projectsRouter;