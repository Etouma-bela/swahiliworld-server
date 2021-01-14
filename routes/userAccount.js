const express = require("express");
const router = express.Router();
const User = require("../models/User");
const VideoModel = require("../models/Video");
const upload = require("../config/cloudinary");
const requireAuth = require("../middlewares/requireAuth");

// A USER CAN UPDATE HIS ACCOUNT, ADD A PICTURE FOR EXAMPLE
router.patch(
  "/me",
  requireAuth,
  upload.single("profilePic"),
  (req, res, next) => {
    const userId = req.session.currentUser;

    if (req.file) {
      req.body.profilePic = req.file.path; // Add profileImage key to req.body
    }

    User.findByIdAndUpdate(userId, req.body, { new: true })
      .select("-password") // Remove the password field from the found document.
      .then((userDocument) => {
        res.status(200).json(userDocument);
      })
      .catch(next);
  }
);

router.get("/me", requireAuth, (req, res, next) => {
  User.findById(req.session.currentUser)
    .select("-password") // Remove the password field from the found document.
    .then((userDocument) => {
      return res.status(200).json(userDocument);
    })
    .catch(next);
});

module.exports = router;
