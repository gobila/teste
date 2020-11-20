
exports.up = function(knex) {
    return knex.schema.createTable('produtos', function(table){
        table.increments('produto_id').primary();
        table.string('nome').notNullable();
        table.string('valor').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('produtos')
};
