var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botons");
boton.addEventListener("click", dibujar);
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarUnBloque(){
	var lineas = parseInt(texto.value)
	var l = 0;
	var yi, xf;
	var espacio = ancho / lineas;		

	for(l = 0; l < lineas; l++){
	yi = espacio * l;
	xf = espacio * (l + 1);
	dibujarLinea("blue", 0, yi, xf, 500);
	}
}
function dibujarDosBloques(){
	var lineas = parseInt(texto.value)
	var l = 0;
	var yi, xf;
	var espacio = ancho / lineas;
	for(l = 0; l < lineas; l++){
		yi = espacio * l;
		xf = espacio * (l + 1);
		xi = espacio * l;
		yf = espacio * (l + 1);
		nxf = 500 - xf;
		nyf = 500 - yf
		dibujarLinea("blue", 0, yi, xf, 500);
		dibujarLinea("green", xi, 500, 500, nyf);
	}
}		

function dibujarTresBloques(){
	var lineas = parseInt(texto.value)
	var l = 0;
	var yi, xf;
	var espacio = ancho / lineas;
	for(l = 0; l < lineas; l++){
		yi = espacio * l;
		xf = espacio * (l + 1);
		xi = espacio * l;
		yf = espacio * (l + 1);
		nxf = 500 - xf;
		nyf = 500 - yf
		dibujarLinea("blue", 0, yi, xf, 500);
		dibujarLinea("green", xi, 500, 500, nyf);
		dibujarLinea("red", xi, 0, 500, yf);
	}
}	

function dibujarCuatroBloques(){
	var lineas = parseInt(texto.value)
	var l = 0;
	var yi, xf;
	var espacio = ancho / lineas;
	for(l = 0; l < lineas; l++){
		yi = espacio * l;
		xf = espacio * (l + 1);
		xi = espacio * l;
		yf = espacio * (l + 1);
		nxf = 500 - xf;
		nyf = 500 - yf
		dibujarLinea("#8E44AD", xi, 500, 500, nyf);
		dibujarLinea("#5DADE2", 0, xf, nxf, 0);
		dibujarLinea("#F1C40F", 0, xf, yi, 500);
		dibujarLinea("#F4511E", xi, 0, 500, yf);
	}
}

$('#mensaje').hide();

function dibujar(){
	if (document.getElementById("uno").checked){
		dibujarUnBloque();		
	}else if (document.getElementById("dos").checked){
		dibujarDosBloques();
	}else if (document.getElementById("tres").checked){
		dibujarTresBloques();
	}else if (document.getElementById("cuatro").checked){
		dibujarCuatroBloques();
	}else{
		$('#mensaje').show();
		$('#mensaje').append('<p style="background-color:#04B431; text-align: center; font-size:20px;">Elige cuantos dibujos!</p>')
	}
}	



	

	

		
	
	


