import express from "express";
import fs from "fs";
import { randomUUID } from "crypto";
const router = express.Router();
const path = "./data/photos.json";

const readData = () => {
  const photosData = fs.readFileSync(path);
  const parsedPhotoData = JSON.parse(photosData);
  return parsedPhotoData;
};

router.get("/", (req, res) => {
  const photosData = readData();
  res.status(200).json(photosData);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const photosData = readData();
  const singlePhoto = photosData.find((photo) => photo.id === id);

  if (singlePhoto) {
    res.json(singlePhoto);
  } else {
    res.sendStatus(404);
  }
});

router.get("/:id/comments", (req, res) => {
  const { id } = req.params;
  const photosData = readData();
  const singlePhoto = photosData.find((comment) => comment.id === id);

  if (singlePhoto) {
    res.json(singlePhoto.comments);
  } else {
    res.sendStatus(404);
  }
});

router.post("/:id/comments", (req, res) => {
  const photosData = readData();
  const { id } = req.params;
  const { name, comment } = req.body;

  const photoIndex = photosData.findIndex((photo) => photo.id === id);
  if (photoIndex === -1) {
    return res.status(404).json({ error: "Photo not found." });
  }
  const newComment = {
    id: randomUUID(),
    name,
    comment,
    timestamp: Date.now(),
  };

  photosData[photoIndex].comments.push(newComment);
  fs.writeFileSync(path, JSON.stringify(photosData));
  res.status(201).json(newComment);
});

export default router;
