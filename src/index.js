import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    // con esto se sincroniza con la base de datos
    await sequelize.sync({ force: false });
    app.listen(4000);
    console.log("running on port 4000");
  } catch (error) {
    console.log(error);
  }
}

main();
