import express from "express";
import cors from "cors";
import photoRouter from "./routes/photos.js";
import tagRouter from "./routes/tags.js";
import "dotenv/config";

const PORT = process.env.PORT;
const app = express();
const { CORS_ORIGIN } = process.env;
app.use(express.json());
app.use(cors({ origin: "http://localhost:5174" }));
// app.use("./static", express.static(""));

app.get("/", (req, res) => {
  res.send("Welcome to Davids API");
});
app.use("/photos", photoRouter);
app.use("/tags", tagRouter);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
