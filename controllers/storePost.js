const path = require('path')
const Post = require('../database/models/Post')
 
module.exports = (req, res) => {
    Post.create(req.body, (error, post) => {
        res.redirect('/')
    })
}