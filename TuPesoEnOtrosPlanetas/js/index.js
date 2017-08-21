 $(document).ready(function() {
var kilos = document.getElementById("kilosos");
var g_tierra = 9.8;
var g_mercurio = 0.38;
var g_venus = 8.87;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_saturno = 10.44;
var g_urano = 8.7;
var g_neptuno = 11.15;
var g_pluton = 0.62;

var nombre;
var boton = document.getElementById("botons");
boton.addEventListener("click", pesados);
var a = document.getElementById("select1");
a.addEventListener("change", function(){a = (this.value)}, false);

var kilos_final;
var kilos_final = parseInt(kilos_final);	
	
function pesoEnMercurio(){
	var kilas = parseInt(kilos.value); 
	(a == 1)
	kilos_final = kilas * g_mercurio / g_tierra;
	nombre = "Mercurio"
	}

function pesoEnVenus(){
	var kilas = parseInt(kilos.value); 
	(a == 2)
	kilos_final = kilas * g_venus / g_tierra;
	nombre = "Venus"
	}

function pesoEnMarte(){
	var kilas = parseInt(kilos.value);  
	(a == 3)
	kilos_final = kilas * g_marte / g_tierra;
	nombre = "Marte"	
	}

function pesoEnJupiter(){
	var kilas = parseInt(kilos.value); 
	(a == 4)
	kilos_final = kilas * g_jupiter / g_tierra;
	nombre = "Jupiter"
	}

function pesoEnSaturno(){
	var kilas = parseInt(kilos.value);  
	(a == 5)
	kilos_final = kilas * g_saturno / g_tierra;
	nombre = "Saturno"	
	}

function pesoEnUrano(){
	var kilas = parseInt(kilos.value);  
	(a == 6)
	kilos_final = kilas * g_urano / g_tierra;
	nombre = "Urano"	
	}

function pesoEnNeptuno(){
	var kilas = parseInt(kilos.value);  
	(a == 7)
	kilos_final = kilas * g_neptuno / g_tierra;
	nombre = "Neptuno"	
	}

function pesoEnPluton(){
	var kilas = parseInt(kilos.value);  
	(a == 6)
	kilos_final = kilas * g_pluton / g_tierra;
	nombre = "Plutón"	
	}
$('#resultado').hide();

function pesados(){
	if (1 == a){
		pesoEnMercurio();
			$('#pregunta').hide();
			$('#resultado').show();
			document.getElementById("resultado").innerHTML =
			"<img src='img/astro.gif'><p>Tu peso en " + nombre + " es " + kilos_final + " kilos</p></div";

	}else if (2 == a){
		pesoEnVenus();
		$('#pregunta').hide();
			$('#resultado').show();
			document.getElementById("resultado").innerHTML =
			"<img src='img/astro.gif'><p>Tu peso en " + nombre + " es " + kilos_final + " kilos</p></div";
	}else if (3 == a){
		pesoEnMarte();
		$('#pregunta').hide();
			$('#resultado').show();
			document.getElementById("resultado").innerHTML =
			"<img src='img/astro.gif'><p>Tu peso en " + nombre + " es " + kilos_final + " kilos</p></div";
	}else if (4 == a){
		pesoEnJupiter();
		$('#pregunta').hide();
			$('#resultado').show();
			document.getElementById("resultado").innerHTML =
			"<img src='img/astro.gif'><p>Tu peso en " + nombre + " es " + kilos_final + " kilos</p></div";
	}else if (5 == a){
		pesoEnSaturno();
		$('#pregunta').hide();
			$('#resultado').show();
			document.getElementById("resultado").innerHTML =
			"<img src='img/astro.gif'><p>Tu peso en " + nombre + " es " + kilos_final + " kilos</p></div";
	}else if (6 == a){
		pesoEnUrano();
		$('#pregunta').hide();
			$('#resultado').show();
			document.getElementById("resultado").innerHTML =
			"<img src='img/astro.gif'><p>Tu peso en " + nombre + " es " + kilos_final + " kilos</p></div";
	}else if (7 == a){
		pesoEnNeptuno();
		$('#pregunta').hide();
			$('#resultado').show();
			document.getElementById("resultado").innerHTML =
			"<img src='img/astro.gif'><p>Tu peso en " + nombre + " es " + kilos_final + " kilos</p></div";
	}else if (8 == a){
		pesoEnPluton();
		$('#pregunta').hide();
			$('#resultado').show();
			document.getElementById("resultado").innerHTML =
			"<img src='img/astro.gif'><p>Tu peso en " + nombre + " es " + kilos_final + " kilos</p></div";
	}else{
		alert("Elige un planeta!")
	}

}

});




