const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middlewares/authenticate');
const authorizeMiddleware = require('../middlewares/authorize');


router.get('/blogPosts/:blogPostId/comments', commentController.getCommentsForBlogPost);


router.post('/blogPosts/:blogPostId/comments', authMiddleware.authenticate, commentController.createCommentForBlogPost);


router.delete('/comments/:id', authMiddleware.authenticate, authorizeMiddleware.authorize(['user', 'editor', 'admin']), commentController.deleteComment);

module.exports = router;
