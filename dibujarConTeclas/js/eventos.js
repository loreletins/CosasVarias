var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

var estado = 0;
var colorsete = "blue";
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x;
var y;


document.addEventListener("mousedown", presionarMouse);

document.addEventListener("mouseup", soltarMouse);

document.addEventListener("mousemove", moverMouse);

function moverMouse(evento){
  if (estado == 1) { 
    dibujarLinea(colorsete, x, y, evento.layerX, evento.layerY, papel);
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
  estado = 0;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var y = 100;
var x = 100; 

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

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
	var colorete = "green";
	var movimiento = 5;
	switch(evento.keyCode)
		{
			case teclas.UP:
				dibujarLinea(colorete, x, y, x, y - movimiento, papel);
				y = y -movimiento;
			break;
			case teclas.DOWN:
				dibujarLinea(colorete, x, y, x, y + movimiento, papel);
				y = y + movimiento;
			break;
			case teclas.LEFT:
				dibujarLinea(colorete, x, y, x - movimiento, y, papel);
				x = x - movimiento;
			break;
			case teclas.RIGHT:
				dibujarLinea(colorete, x, y, x + movimiento, y,papel);
				x = x + movimiento;
			break;
		}
	
}