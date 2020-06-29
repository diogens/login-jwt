import { createConnection, Connection } from "typeorm";

createConnection().then(() =>
  console.log("🔥⚡ Successfuly Connection with Database 🚀")
);
