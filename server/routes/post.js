// routes/post.js
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET /api/posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 게시글 등록
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "제목과 내용을 입력해 주세요"
      });
    }

    const post = new Post({
      title, content
    });

    const savedPost = await post.save();

    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({
      message: "게시글 등록 중 오류가 발생했습니다.",
      error: error.message
    });
  }
});

module.exports = router;