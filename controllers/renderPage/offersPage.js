const Post = require('../../database/models/Post')
 
module.exports = async (req, res) => {
    const posts = await Post.find({});
 
    // TODO: offfer should support pagination: not loading all offers at the same time
    res.render("offers", {
        posts
    });
}