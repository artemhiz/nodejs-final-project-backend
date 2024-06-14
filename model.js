const mongoose = require('mongoose');
const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    authorId: {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model('posts', newsSchema);