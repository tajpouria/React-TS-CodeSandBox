import knex from "knex";

export const db = knex({
  client: "sqlite3",
  connection: {
    filename: "./data.db3"
  },
  useNullAsDefault: true
});
