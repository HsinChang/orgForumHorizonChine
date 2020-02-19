const path = require('path');
const expressEdge = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const createPostController = require('./controllers/createPost');
const offersPageController = require('./controllers/offersPage');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const homePageController = require('./controllers/homePage');
const aboutPageController = require('./controllers/aboutPage');

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

//Validation to make sure everything is filled
const storePost = require('./middleware/storeValidator')
app.use('/store', storePost)
 
app.get('/', homePageController);
app.get('/index.html', homePageController);
app.get('/about.html', aboutPageController);
app.get('/offers', offersPageController);
app.get('/new', createPostController);
app.post('/store', storePostController);
//make each post clickable
app.get('/:id', getPostController);
 
app.listen(4000, () => {
    console.log('App listening on port 4000')
});