const express = require("express");

const feedController = require("../controllers/feed");
const router = express.Router();

router.get("/posts", feedController.getPosts);

// Post request /feed/post
router.post("/post", feedController.createPost);

module.exports = router;
