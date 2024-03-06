import express from "express";
import cors from "cors";
import mongoose from "./db/db.js";
import router from "./routes/index.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(router)



app.listen(5000, () => {
  console.log("App is running @http://localhost:5000/");
});
