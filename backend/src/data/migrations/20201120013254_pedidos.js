
exports.up = function(knex) {
    return knex.schema.createTable('pedidos', function(table){
        table.increments('pedido_id').primary();
        table.string('valor').notNullable();
        table.string('data').notNullable();
        table.string('hora').notNullable();
        table.timestamp('create_at').defaultTo(knex.fn.now())
        table.timestamp('update_at').defaultTo(knex.fn.now())

        table.string('cliente_id').notNullable();
        table.string('produto_id').notNullable();

        table.foreign('cliente_id').references('id').inTable('clietes');

        table.foreign('produto_id').references('id').inTable('produtos');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pedidos')
};
