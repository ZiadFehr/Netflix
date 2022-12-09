const express = require('express');

//express app
const app = express();

//app listener
app.listen(3000);

//register view engine
app.set('view engine', 'ejs');
app.set('views', 'EJS');

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.sendFile('./HTML/about.html', { root: __dirname });
});

//redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//Error 404 (must always be at the bottom of the code)
app.use((req, res) => {
    res.status(404).sendFile('./HTML/err.html', { root: __dirname });
});