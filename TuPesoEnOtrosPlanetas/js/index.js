 $(document)
  .ready(function () {
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

    var planetas = {};

    planetas["1"] = { nombre: "Mercurio", g: g_mercurio};
    planetas["2"] = { nombre: "Venus", g: g_venus};
    planetas["3"] = { nombre: "Marte", g: g_marte};
    planetas["4"] = { nombre: "Jupiter", g: g_jupiter};
    planetas["5"] = { nombre: "Saturno", g: g_saturno};
    planetas["6"] = { nombre: "Urano", g: g_urano};
    planetas["7"] = { nombre: "Neptuno", g: g_neptuno};
    planetas["8"] = { nombre: "Plutón", g: g_pluton};

    var planetas_permitidos = ["1", "2", "3", "4", "5", "6", "7", "8"];

    var nombre;
    var boton = document.getElementById("botons");
    boton.addEventListener("click", pesados);
    var a = document.getElementById("select1");
    a.addEventListener("change", function () {
      a = (this.value)
    }, false);

    var kilos_final;
    var kilos_final = parseInt(kilos_final);

    function peso () {
      var kilas = parseInt(kilos.value);
      kilos_final = kilas * planetas[a].g / g_tierra;
      nombre = planetas[a].nombre
    }

    $('#resultado')
      .hide();

    function pesados() {
      event.preventDefault();
      if (planetas_permitidos.indexOf(a) >= 0) {
        peso();
        $('#pregunta').hide();
        $('#resultado').show();
        document
          .getElementById("resultado")
          .innerHTML =
          "<img src='img/astro.gif'><p>Tu peso en " + nombre + " es " + Math.round(kilos_final) + " kilos</p></div";
      } else {
        alert("Elige un planeta!")
      }
    }
  });