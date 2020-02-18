const path = require('path');
 
const express = require('express');
 
const app = new express();
 
app.use('/assets', express.static('assets'));
 
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'));
});
 
app.listen(4000, () => {
    console.log('App listening on port 4000')
});