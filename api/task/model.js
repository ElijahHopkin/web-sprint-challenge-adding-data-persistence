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
    
        return db('tasks')
            .where({task_id})
            .first();

        // .leftJoin('projects', 'tasks.project_id', 'projects.project_id')
        // .select('tasks.*', 'project_name', 'project_description');
}



module.exports= {
    findAll,
    create
}