var express = require('express');
var request = require('request');

var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(cors({credentials: true, origin: true}));

app.use('/', function(req, res) {  
    var purl = req.url.slice(1);
    req.pipe(request(purl)).on('response', function(res) {
        res.headers['access-control-allow-origin'] = req.header('Origin')
    }).pipe(res);
});

var port = process.env.PORT || 3001;
app.listen(port);
console.log("listening on " + port + "!");