const model = require('./model');

module.exports.getPosts = async (req, res) => {
    if (req.params._id) {
        const post = await model.findById(req.params._id);
        res.send(post);
    } else {
        const posts = await model.find();
        res.send(posts);
    }
}

module.exports.createPost = async (req, res) => {
    const post = req.body;
    model.create(post).then(data => {
        res.json({
            message: "Post has been published!",
            data: data,
        })
    })
}

module.exports.deletePost = async (req, res) => {
    const { _id } = req.params;
    const { authorId } = req.body;
    const post = await model.findById({ _id });

    if (post.authorId === authorId) {
        model.findByIdAndDelete(_id).then(() => res.json({
            message: `Post with ID: ${ _id } has been deleted`
        }))
    } else {
        res.json({
            message: "Your ID and ID of the author of this post don't match. It is not possible to delete other's posts",
            postFailedToDelete: post,
        })
    }
}

module.exports.editPost = async (req, res) => {
    const { _id } = req.params;
    const updatedPost = req.body;
    const post = await model.findById(_id);

    if (post.authorId === authorId) {
        model.findByIdAndUpdate(_id, { updatedPost }).then(() => {
            res.json({
                message: `Post with ID: "${ _id }" has been edited`,
                updatedPost: updatedPost,
            })
        })
    } else {
        res.json({
            message: "Your ID and ID of the author of this post don't match. It is not possible to update other's posts",
            postFailedToEdit: post,
        })
    }
}

module.exports.getProfilePosts = async (req, res) => {
    const profilePosts = await model.find({authorId: req.params.authorId});
    res.send(profilePosts);
}
