// build your `Resource` model here
const db = require('../../data/dbConfig');

 const getAll = () => {
    return db('projects');
}

 async function postProject(project) {
    const [project_id] = await db('projects').insert(project)
    return getProjects().where({project_id}).first();
}



module.exports= {
    getAll,
    postProject
}