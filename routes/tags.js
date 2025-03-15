import express from "express";
import fs from "fs";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("tags");
});

export default router;
