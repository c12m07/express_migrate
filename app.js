import express from "express";
import cors from "cors";
import db from "./config/database.js";
import Router from "./routes/routes.js";
import AuthRouter from "./routes/auth.js";

const app = express();

app.use(express.json());

// Librería para la seguridad
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "funciona" });
});

try {
  await db.authenticate();
  console.log("Connection has been established succesfully");
} catch (err) {
  console.log("Unable to connect to the database: ", err);
}

app.use(Router);
app.use(AuthRouter);

app.listen(3001, () => {
  console.log("Server listening at por 3001");
});
