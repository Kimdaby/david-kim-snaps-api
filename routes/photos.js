import express from "express";
import fs from "fs";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("photos");
});

export default router;
