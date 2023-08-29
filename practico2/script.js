   console.log("corriendo el juego");

// Importo del HTML las variables sobre las que voy a operar
let reglas = document.getElementById("reglas");
let ronda = document.getElementById("nro-de-ronda")
let resultadoRonda = document.getElementById("result-ronda");
let nombrePlayer = document.getElementById("player");
let marcadorPlayer = document.getElementById("marcador-player");
let marcadorPc = document.getElementById("marcador-pc");
let ataquePlayer = document.getElementById("img-jugada-player");
let ataquePc = document.getElementById("img-jugada-pc");
let contenedorResultadoFinal = document.getElementById("resultado-final");
let botonPiedra = document.getElementById("btn-piedra");
let botonPapel = document.getElementById("btn-papel");
let botonTijera = document.getElementById("btn-tijera");
let perdiste = document.getElementById("perdiste");
let ganaste = document.getElementById("ganaste");
let botonReiniciar = document.getElementById("btn-reiniciar");
// let barraProgreso = document.querySelector("#barra");



// importo las areas de juego sobre las que voy a operar
let areaReglamento = document.getElementsByClassName("reglamento");
let areaJuego = document.getElementById("area-juego");
let areaResultadoRonda = document.getElementById("resultado-ronda");
let areaGanaste = document.getElementById("area-ganaste");
let areaPerdiste = document.getElementById("area-perdiste");
let areaBotonera = document.querySelector(".botonera");
let areaReiniciar = document.getElementById("area-reiniciar");




// defino variables a usar
var eleccionPlayer;
var eleccionPc;

var imgJugadaPlayer;
var imgJugadaPc;

var puntosPlayer = 0;
var puntosPc = 0;

var nroRonda = 0;



// solicito y valido nombre jugador (NO esp.vacío, NO punto, NO saltear con Aceptar o Cancelar)
// paso nombre a mayusculas y lo seteo en el marcador
function cargarNombre(){
let nombre = prompt("INGRESA TU NOMBRE O ALIAS PARA COMENZAR A JUGAR             (hasta 9 caracteres)")
while (nombre == " " || nombre == "." || !nombre || nombre.length > 9) {
  nombre = prompt("UPS !!...Ingresa un nombre válido (hasta 9 caracteres)");
}
nombre = nombre.toUpperCase();
nombrePlayer.innerHTML = nombre;
}


// Programo el inicio de los turnos con la seleccion de una opcion del jugador y
// llamo a la funcion que define la jugada de la pc
function actualizarRonda() {
  resultadoRonda.style.color="red";
  
  if (nroRonda===0) {
    ronda.innerHTML = "RONDA 1";
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




// creo funcion con la jugada de la Pc
function juegaPc() {
  let valores = { 0: 'piedra', 1: 'papel', 2: 'tijera' };
  eleccionPc = valores[Math.floor(Math.random() * 3)];
  console.log("pc" + eleccionPc);
  imagenesJugada(eleccionPlayer, eleccionPc);
}
 
function imagenesJugada(ePlayer, ePc) {
 if (ePlayer == "piedra") {
  ataquePlayer.innerHTML = '<img class="jugada-player" src="/images/piedra.png">';
 } else if (ePlayer == "papel") {
  ataquePlayer.innerHTML = '<img class="jugada-player" src="/images/papel.png">';
 } else {
  ataquePlayer.innerHTML = '<img class="jugada-player" src="/images/tijera.png">';
 }
 console.log('imagenPlayer');

 if (ePc == "piedra") {
  ataquePc.innerHTML = '<img class="jugada-pc" src="/images/piedra.png">';
 } else if (ePc == "papel") {
  ataquePc.innerHTML = '<img class="jugada-pc" src="/images/papel.png">';
 } else {
  ataquePc.innerHTML = '<img class="jugada-pc" src="/images/tijera.png">';
 }
determinarGanador(eleccionPlayer, eleccionPc);
console.log('imagenPc');
}



// determino ganador y reultados 
function determinarGanador(ePlayer, ePc) {
  //determino ganador de la ronda y paso a resultados de ronda
  if (ePc === ePlayer) {
    resultadoEmpate();
  } else if (ePc == 'piedra' && ePlayer == 'tijera' || ePc == 'papel' && ePlayer == 'piedra' || ePc == 'tijera' && ePlayer == 'papel') {
    resultadoPerdiste();
  } else {
    resultadoGanaste()
  }
  actualizarRonda();
// determino ganador de partida y paso a resultado de partida
  if (puntosPc==3) {
    ganoPc();
  } else if (puntosPlayer==3) {
    ganoPlayer();
  }
}

// defino las acciones segun el resultado de las rondas
function resultadoEmpate(){
  resultadoRonda.innerHTML = "Empate !!!";
  resultadoRonda.style.color = "red";
}

function resultadoPerdiste(){
  resultadoRonda.innerHTML = "Perdiste la ronda";
  resultadoRonda.style.color = "red";
  puntosPc += 1;
  nroRonda += 1;
  marcadorPc.innerHTML = puntosPc;

}

function resultadoGanaste(){
  resultadoRonda.innerHTML = "Ganaste la ronda";
  resultadoRonda.style.color = "red";
  puntosPlayer += 1;
  nroRonda += 1;
  marcadorPlayer.innerHTML = puntosPlayer;
  
}

// defino las acciones segun el resultado de la partida
function ganoPc() {
  areaBotonera.style.display = "none";
  reglas.style.color = "black";
  areaPerdiste.style.display = "block";
  areaReiniciar.style.display = "block";
}

function ganoPlayer() {
  areaBotonera.style.display = "none";
  reglas.style.color = "black";
  areaGanaste.style.display = "block";
  areaReiniciar.style.display = "block";
}

// defino acciones del boton de inicio para reiniciar una nueva partida
function reiniciar() {
  puntosPlayer = 0;
  puntosPc = 0;
  nroRonda = 0;
  areaBotonera.style.display = "block";
  reglas.style.color = "white";
  areaGanaste.style.display = "none";
  areaPerdiste.style.display = "none";
  areaReiniciar.style.display = "none";
  ronda.innerHTML = "LISTO PARA EMPEZAR !!!";
  resultadoRonda.innerHTML = "nueva partida";
  resultadoRonda.style.color = "black";
  marcadorPlayer.innerHTML = "0";
  marcadorPc.innerHTML = "0";
  ataquePlayer.innerHTML = '<img class="jugada-player" src="/images/cerebro2.png">';
  ataquePc.innerHTML = '<img class="jugada-pc" src="/images/pc.jpg">';
  console.log("reinicio");
  actualizarRonda();
}


window.addEventListener("load", cargarNombre);
botonReiniciar.addEventListener("click", reiniciar);