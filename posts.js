const { Router } = require('express');
const { getPosts, createPost, deletePost, editPost } = require('./controller');
const router = Router();

router.get('/:_id?', getPosts);
router.post('/', createPost);
router.delete('/:_id', deletePost);
router.put('/:_id', editPost);

module.exports = router;