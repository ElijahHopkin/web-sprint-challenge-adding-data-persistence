// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Tasks.findAll()
        .then(tasks => {
            res.json(tasks.map(task => {
                if(task.task_completed===0){
                    return({...task, task_completed: false})
                }else{
                    return({...task, task_completed: true})
                }
            }))
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    if( req.body.task_description.trim() ===''|| !req.body.project_id ) {
        res.status(400).json('send all required inputs: task_description and project_id')
    }
    
    Tasks.create(req.body)
        .then(newTask => {
            res.status(201).json({...newTask, task_completed: newTask.task_completed===0? false: true})
        })
        .catch(next)
})


module.exports=router;