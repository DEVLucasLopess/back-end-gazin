import knex from "knex";
import { INiveis } from "../../models";
import { ETableNames } from "../../seeds/ETableNames";

export const create = async (nivel: Omit<INiveis, 'id'>): Promise<number | Error> => {
  try {
    const [result] = await knex(ETableNames.nivel).insert(nivel).returning('id');

    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }

    return new Error("Error");
  } catch (error) {
    return new Error("Error");
  }
};