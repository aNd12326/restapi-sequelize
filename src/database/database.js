import Sequelize from "sequelize";

export const sequelize = new Sequelize("projectsdb", "postgres", "anderson", {
  host: "localhost",
  dialect: "postgres",
});
