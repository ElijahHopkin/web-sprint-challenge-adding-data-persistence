// build your server here and require it from index.js
const express = require ('express')
const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
const tasksRouter = require('./task/router');
// const Projects = require('./project/model')


const server = express();

server.use(express.json());
// server.get('/api/projects', (req, res, next) => {
//     Projects.getProjects()
//         .then(results => {
//             res.json(results)
//         })
//         .catch(next)
// })
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('api/tasks', tasksRouter);

server.use('/', (req,res) => {
    res.json("LET'S GET READY TO RUMBLE!!");
})


server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})
module.exports= server;