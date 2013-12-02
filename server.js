var http  = require('http'),
    express = require('express');

var app = express(),
    server = http.createServer();

app.configure(function() {
    app.engine('.html', require('ejs').__express);
    app.set('view engine', 'html');
    app.set('views', __dirname);

    app.use('/lib', express.static(__dirname + '/lib'));

    app.use(express.cookieParser());
    app.use(express.session({ secret: 'smurfette' }));
    app.use(express.bodyParser());
    app.use(express.csrf());
});

app.get('/', function (req, res) {
    res.locals.token = req.csrfToken();
 	res.render('index');
});

app.post('/files', function (req, res) {

});

server.on('request', app);
server.listen(4242, function () {
    console.log('http://127.0.0.1:4242');
});