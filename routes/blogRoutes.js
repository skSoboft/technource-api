const express = require("express");
const { authenticate } = require("../middlewares/authenticate");
const { authorize } = require("../middlewares/authorize");
const {
  getAllBlogPosts,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
} = require("../controllers/blogController"); 

const router = express.Router();


router.get("/blogPosts", getAllBlogPosts);


router.post("/blogPosts", createBlogPost);


router.put(
  "/blogPosts/:id",
  authenticate,
  authorize(["editor", "admin"]),
  updateBlogPost
);


router.delete(
  "/blogPosts/:id",
  authenticate,
  authorize(["admin"]),
  deleteBlogPost
);

module.exports = router;
