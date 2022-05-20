// build your `Resource` model here
const db = require('../../data/dbConfig');


function getAll() {
    return db('resources');
}

async function add(newResource) {
    const [resource_id] = await db('resources').insert(newResource);
        return getAll().where({resource_id}).first();
}



module.exports= {
    getAll,
    add

}
