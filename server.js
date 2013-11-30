var http  = require('http'),
    express = require('express');

var app = express(),
    server = http.createServer();

app.use(express.logger('dev'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use(express.bodyParser());

app.get('/', function (req, res) {
 	res.sendfile(__dirname + '/index.html')
});

app.post('/files', function (req, res) {

});

server.on('request', app);
server.listen(4242, function () {
    console.log('http://127.0.0.1:4242');
});