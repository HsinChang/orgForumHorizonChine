const mongoose = require('mongoose');
 
const PostSchema = new mongoose.Schema({
    company: String,
    job_title: String,
    content: String
});
 
const Post = mongoose.model('Post', PostSchema);
 
module.exports = Post;