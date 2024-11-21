import type { Knex } from "knex";
import { ETableNames } from "../seeds/ETableNames";

export async function up(knex: Knex) {
    return knex
    .schema
    .createTable(ETableNames.nivel, table => {
        table.bigIncrements('id').primary().index();
        table.string('nivel', 150).index().notNullable();

        table.comment('tabela de niveis dos usuários');
    }).then(() => {
        console.log(`Tabela ${ETableNames.nivel} criada com sucesso.`);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(ETableNames.nivel).then(() => {
        console.log(`Tabela ${ETableNames.nivel} excluida com sucesso!.`);
    });
}