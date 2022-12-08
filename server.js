var http = require('http');
var fs = require('fs');
var _ = require('lodash');

const server = http.createServer((req, res) => {
    //lodash
    const greet = _.once(() => {
        console.log('hello');
    });
    greet();
    res.setHeader('Content-Type', 'text/html');
    let path = './html/';
    switch (req.url) {
        case '/':
            path += 'home.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
        default:
            path += 'err.html';
            res.statusCode = 404;
            break;
    }
    
    fs.readFile(path, (err, data) => {
        if (err) throw err;
        res.end(data);
    })
});
server.listen(3000, 'localhost', () => {
    console.log('Listening')
});