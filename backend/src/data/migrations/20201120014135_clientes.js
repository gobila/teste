
exports.up = function(knex) {
    return knex.schema.createTable('clientes', function(table){
        table.string('cliente_id').primary();
        table.string('nome').notNullable();
        table.string('tel').notNullable();
        table.string('nasc').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('clientes')
};
