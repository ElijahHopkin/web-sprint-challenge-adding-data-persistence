// build your `Task` model here
const db = require ('../../data/dbConfig');


function findAll() {
    return db('tasks')
        .leftJoin('projects', 'tasks.project_id', 'projects.project_id')
        .select('tasks.*', 'project_name', 'project_description');
}


async function create(newTask) {
    const [task_id] = await db('tasks')
    .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_id')
    .insert(newTask)
        // .then(result =>{
        //     if(result.task_completed===0){
        //         return {...result, task_completed:'false'}.where({task_id}).first()
        //     }else{
        //         return{...result, task_completed:'true'}.where({task_id}).first()
        //     }
        // })

        return db('tasks')
            .where({task_id})
            .first();
}



module.exports= {
    findAll,
    create
}