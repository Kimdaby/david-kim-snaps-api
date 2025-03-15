import express from "express";
import cors from "cors";
import fs from "fs";
import photoRouter from "./routes/photos.js";
import tagRouter from "./routes/tags.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/photos", photoRouter);
app.use("/tags", tagRouter);

app.listen(8080, () => console.log("Listening..."));
