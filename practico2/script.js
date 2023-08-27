   console.log("corriendo el juego");

// Importo del HTML las variables sobre las que voy a operar
let reglas = document.getElementById("reglas");
let ronda = document.getElementById("nro-de-ronda")
let nombrePlayer = document.getElementById("player");
let marcadorPlayer = document.getElementById("marcador-player");
let marcadorPc = document.getElementById("marcador-pc");
let ataquePlayer = document.getElementById("jugada-plyer");
let ataquePc = document.getElementById("jugada-pc");
let resultadoRonda = document.getElementById("result-ronda");
let botonPiedra = document.getElementById("btn-piedra");
let botonPapel = document.getElementById("btn-papel");
let botonTijera = document.getElementById("btn-tijera");
// let barraProgreso = document.querySelector("#barra");

// importo las areas de juego sobre las que voy a operar
let areaReglamento = document.getElementsByClassName("reglamento");
let areaJuego = document.getElementById("area-juego");
let areaResultadoRonda = document.getElementById("resultado-ronda");
let areaBotonera = document.querySelector(".botonera");


// defino variables a usar

var eleccionPlayer;
var eleccionPc;

var imgJugadaPlayer;
var imgJugadaPc;

var puntosPlayer = 0;
var puntosPc = 0;

var nroRonda = 0;


    // marcadorPlayer.innerText= 1;


// solicito y valido nombre jugador (NO esp.vacío, NO punto, NO saltear con Aceptar o Cancelar)
function cargarNombre(){
let nombre = prompt("Ingresa tu nombre para comenzar a jugar")
while (nombre == " " || nombre == "." || !nombre) {
  nombre = prompt("UPS !!...Ingresa un nombre válido");
}
// paso nombre a mayusculas y lo seteo en el marcador
nombre = nombre.toUpperCase();
nombrePlayer.innerHTML = nombre;
// jugar();
}


// Programo el inicio del turno con la seleccion de una opcion del jugador y
// llamo a la funcion que define la jugada de la pc
function actualizarRonda() {
  if (nroRonda===0) {
    ronda.innerHTML = "RONDA ";
  } else { 
    ronda.innerHTML = "RONDA " + (nroRonda);
  }
}
  botonPiedra.addEventListener("click", function () {
    eleccionPlayer = "piedra";
    console.log(eleccionPlayer)
    juegaPc();
  })

  botonPapel.addEventListener("click", function () {
    eleccionPlayer = "papel";
    console.log(eleccionPlayer)
    juegaPc();
  })

  botonTijera.addEventListener("click", function () {
    eleccionPlayer = "tijera";
    console.log(eleccionPlayer)
    juegaPc();
  })
  //console.log(eleccionPlayer)



// creo funcion con la jugada de la Pc
function juegaPc() {
  let valores = { 0: 'piedra', 1: 'papel', 2: 'tijera' };
  eleccionPc = valores[Math.floor(Math.random() * 3)];
  console.log("pc" + eleccionPc);
  determinarGanador(eleccionPlayer, eleccionPc);
  //console.log(jugadaComputador)
}
 
// determino ganador y paso reultados 
function determinarGanador(ePlayer, ePc) {
  if (ePc === ePlayer) {
    resultadoEmpate();
  } else if (ePc == 'piedra' && ePlayer == 'tijera' || ePc == 'papel' && ePlayer == 'piedra' || ePc == 'tijera' && ePlayer == 'papel') {
    resultadoPerdiste();
  } else {
    resultadoGanaste()
  }

  actualizarRonda();

  if (nroRonda >= 5) {
    resultadoFinal();
  }
}

// defino las acciones segun el resultado
function resultadoEmpate(){
  resultadoRonda.innerHTML = "EMPATE !!!";
}

function resultadoPerdiste(){
  resultadoRonda.innerHTML = "PERDISTE";
  puntosPc += 1;
  nroRonda += 1;
  marcadorPc.innerHTML = puntosPc;
}

function resultadoGanaste(){
  resultadoRonda.innerHTML = "GANASTE";
  puntosPlayer += 1;
  nroRonda += 1;
  marcadorPlayer.innerHTML = puntosPlayer;
}

function resultadoFinal(){
  areaBotonera.style.display = "none";
  resultadoRonda.innerHTML = "FIN DEL JUEGO";
}

window.addEventListener("load", cargarNombre);

































//barra
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_progressbar_label_js
// var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 10;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;

//       } else {
//         width++;
//         elem.style.width = width + "%";
//         elem.innerHTML = width  + "%";
//       }
//     }
//   }
// }