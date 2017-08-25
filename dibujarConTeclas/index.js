var express = require('express');
var https = require('https');
var app = express();

app.use('/lib',express.static(__dirname + '/node_modules')); 

app.get('/', function (req, res) {
  res.sendFile(__dirname +'/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});