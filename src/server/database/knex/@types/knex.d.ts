import { INiveis } from "../../models";

declare module 'knex/types/tables' {
    interface Tables {
        nivel: INiveis;
        //desenvolvedores: IDesenvolvedores;
    }
}