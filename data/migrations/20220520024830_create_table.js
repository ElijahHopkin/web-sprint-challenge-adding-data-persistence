/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('projects', tbl => {
        tbl.increments('project_id');
        tbl.string('project_name')
            .notNullable();
        tbl.string('project_description');
        tbl.boolean('project_completed')
            .notNullable();
    })
    await knex.schema.createTable('resources', tbl=> {
        tbl.increments('resource_id');
        tbl.string('resource_name')
            .notNullable()
                .unique();
        tbl.string('resource_description');
    })
    await knex.schema.createTable('tasks', tbl => {
        tbl.increments('task_id');
        tbl.string('task_description')
            .notNullable;
        tbl.string('task_notes');
        tbl.boolean('task_completed')
            .notNullable();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects');
        
    })
    await knex.schema.createTable('project_resources', tbl => {
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects');
        tbl.integer('resources_id')
            .unsigned()
            .notNullable()
            .references('resources_id')
            .inTable('resources');
        tbl.primary(['project_id', 'resources_id']);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('project_resources', tbl => {}),
    await knex.schema.dropTableIfExists('tasks', tbl => {}),
    await knex.schema.dropTableIfExists('resources', tbl => {}),
    await knex.schema.dropTableIfExists('projects', tbl => {})
  
};
