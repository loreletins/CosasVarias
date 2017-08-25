var express = require('express');
var app = express();
var nodemailer = require('nodemailer');

app.use('/lib',express.static(__dirname + '/node_modules')); 
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname +'/index.html');
});

app.get('/enviarMail', function (req,res){
	transporter.sendMail(mailOptions, function(error, response){
		if(error){
			console.log(error)
				}else{
					res.send('Mensaje Enviado')
				};

		});
	});

var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth:{
		user:'dibujandin@gmail.com',
		pass:'dibujito123'
	}
})

var mailOptions = {
	from: ' Loreto Jara',
	to:'riita.lyn@gmail.com',
	subject: 'Gracias por dibujar',
	text: 'Aqui esta tu dibujo'
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});