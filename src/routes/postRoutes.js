const express = require("express");

const {
  createPost,
  getPosts,
  deletePost,
  getTopPosts,
} = require("../controllers/postController");

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);

router.get("/top", getTopPosts);

router.delete("/:id", deletePost);

module.exports = router;