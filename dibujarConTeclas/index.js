var express = require('express');
var app = express();
var nodemailer = require('nodemailer');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     
  extended: true
  }));

app.use('/lib',express.static(__dirname + '/node_modules')); 
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname +'/index.html');
});


app.post('/imagen', function(req, res){
	var cid = 'dibujo-loreto-' + new Date().getTime();
	var mailOptions = {
	from: ' Loreto Jara',
	to: req.body.email,
	subject: 'Gracias por dibujar',
	text: 'Aqui esta tu dibujo',
	html: 'Aqui esta tu dibujo: <img src="cid:' + cid + '"/>',
	attachments: [{
	filename: cid + '.jpg',
	content: req.body.imgBase64.split("base64,")[1],
	encoding: 'base64',
	cid: cid
  	}]
	}
	transporter.sendMail(mailOptions, function(error, response){
		if(error){
			console.log(error)
		}else{
			res.send('Mensaje Enviado')
		}
});
});	


var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth:{
		user:'dibujandin@gmail.com',
		pass:'dibujito123'
	}
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});