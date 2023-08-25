const Blog = require("../models/BlogPost");

const getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await Blog.find();
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const createBlogPost = async (req, res) => {
  console.log("req.body::", req.body);
  const { title, content } = req.body;

  try {
    const newPost = new Blog({ title, content, author: "1234" });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.log("Error::", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

const updateBlogPost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const updatedPost = await Blog.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const deleteBlogPost = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await Blog.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getAllBlogPosts,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
};
