const path = require('path');
const expressEdge = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./database/models/Post');
 
const app = new express();

mongoose.connect('mongodb://localhost:27017/node-blog', { useNewUrlParser: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err));

app.use('/assets', express.static('assets'));
app.use(expressEdge.engine);
app.set('views', __dirname + '/views');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'));
});

app.get('/offers', async(req, res) => {
    const posts = await Post.find({})
    res.render('offers', {
        posts
    });
});

app.get('/new', (req, res) => {
    res.render('create');
});

app.post('/store', (req, res) => {
    Post.create(req.body, (error, post) => {
        res.redirect('/')
    })
});
 
app.listen(4000, () => {
    console.log('App listening on port 4000')
});