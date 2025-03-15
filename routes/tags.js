import express from "express";
import fs from "fs";
const router = express.Router();
const path = "./data/tags.json";

const readData = () => {
  const tagsData = fs.readFileSync(path);
  const parsedtagData = JSON.parse(tagsData);
  return parsedtagData;
};

router.get("/", (req, res) => {
  const tagsData = readData();
  res.status(200).json(tagsData);
});

export default router;
