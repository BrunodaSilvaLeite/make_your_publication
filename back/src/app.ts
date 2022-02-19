import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes"
import "express-async-errors"

const app = express();
app.use(cors())
app.use(express.json());
app.use(router)

app.listen("4000", () => {
    console.log("listening on port 4000")
})