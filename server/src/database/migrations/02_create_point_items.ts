import Knex from 'knex'

export async function up(knex: Knex){
    //CRIAR A TABELA
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();


        table.integer('point_id')
        .notNullable()
        .references('id')
        .inTable('points');


        table.integer('item_id')
        .notNullable()
        .references('id')
        .inTable('items');
       

    });
}

export async function down(knex: Knex){
    // Voltar Atras (DELETAR A TABELA)
    return knex.schema.dropSchema('point_items');
}