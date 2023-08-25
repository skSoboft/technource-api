const Comment = require('../models/Comment'); // Replace with your data model


const getCommentsForBlogPost = async (req, res) => {
  const { blogPostId } = req.params;

  try {
    const comments = await Comment.find({ blogPost: blogPostId }).populate('user');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


const createCommentForBlogPost = async (req, res) => {
  const { content } = req.body;
  const { user } = req;
  const { blogPostId } = req.params;

  try {
    const newComment = new Comment({ content, user: user.id, blogPost: blogPostId });
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


const deleteComment = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedComment = await Comment.findByIdAndDelete(id);
    if (!deletedComment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.json({ message: 'Comment deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getCommentsForBlogPost,
  createCommentForBlogPost,
  deleteComment,
};
