const express = require("express");
const router = express.Router();
const VideoModel = require("../models/Video");

// GET ALL VIDEOS IN THE DATABASE
router.get("/", (req, res, next) => {
  VideoModel.find()
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// GET ONE VIDEO IN DB
router.get("/:id", (req, res, next) => {
  VideoModel.findById(req.params.id)
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// CREATE ONE VIDEO : ONLY ADMINS CAN DO IT
router.post("/", (req, res, next) => {
  VideoModel.create(req.body)
    .then((videoDocument) => {
      res.status(201).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// UPDATE ONE VIDEO : ONLY ADMINS CAN DO IT
router.patch("/:id", (req, res, next) => {
  VideoModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((videoDocument) => {
      res.status(200).json(videoDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// DELETE ONE VIDEO : ONLY ADMINS CAN DO IT
router.delete("/:id", (req, res, next) => {
  VideoModel.findByIdAndRemove(req.params.id)
    .then((videoDocument) => {
      res.status(204).json({
        message: "Successfuly deleted !",
      });
    })
    .catch((error) => {
      next(error);
    });
});
