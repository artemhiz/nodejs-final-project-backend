const { Router } = require('express');
const { getProfilePosts } = require('./controller');
const router = Router();

router.get('/:authorId', getProfilePosts);

module.exports = router;