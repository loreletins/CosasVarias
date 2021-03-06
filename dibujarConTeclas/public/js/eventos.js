var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};
var mail = document.getElementById("correo");
$("#guardar").click(function(){
	var src = ($('#area_de_dibujo')[0]).toDataURL("image/png");
		$.ajax({
			type: "POST",
			url: "/imagen",
  			data: {
     			imgBase64: src,
   				email: mail.value
				}
			}).done(function(o) {
  		console.log('saved');
		});
	})


var color = document.getElementById("colores");
color.addEventListener("change", function(){color = (this.value)}, false);

var estado = 0;
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x;
var y;

document.addEventListener("mousedown", presionarMouse); //mover con mouse

document.addEventListener("mouseup", soltarMouse);

document.addEventListener("mousemove", moverMouse);

function moverMouse(evento){
	if (estado == 1) {
    	dibujarLinea(color, x, y, evento.layerX, evento.layerY, papel);
  	}
  	x = evento.layerX;
  	y = evento.layerY;
}

function presionarMouse(evento){
  	estado = 1;
  	x = evento.layerX;
  	y = evento.layerY;
}

function soltarMouse(evento){
	estado = 0;
  	x = evento.layerX;
  	y = evento.layerY;
}

function clearCanvas(cuadrito,papel) {
    papel.clearRect(0, 0, cuadrito.width, cuadrito.height);
    //e.preventDefault();
}

document.addEventListener("keydown", dibujarTeclado); //mover con teclado
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var y = 100;
var x = 100;


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(evento){
	var movimiento = 5;
	switch(evento.keyCode)
		{
			case teclas.UP:
				dibujarLinea(color, x, y, x, y - movimiento, papel);
				y = y -movimiento;
			break;
			case teclas.DOWN:
				dibujarLinea(color, x, y, x, y + movimiento, papel);
				y = y + movimiento;
			break;
			case teclas.LEFT:
				dibujarLinea(color, x, y, x - movimiento, y, papel);
				x = x - movimiento;
			break;
			case teclas.RIGHT:
				dibujarLinea(color, x, y, x + movimiento, y,papel);
				x = x + movimiento;
			break;
		}

}

