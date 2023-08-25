   console.log("corriendo el juego");

let puntosPlayer = 0;
let puntosPc = 0;

let reglas = document.querySelector("#reglas");
let nombrePlayer = document.querySelector("#player");
let marcadorPlayer = document.querySelector("#marcador-player");
let marcadorPc = document.querySelector("#marcador-pc")

let botonera = document.querySelector(".botonera")

let juegoPlayer = document.querySelector("#jugada-player");
let juegoPc = document.querySelector("#jugada-pc");

let barraProgreso = document.querySelector("#barra");

  // marcadorPlayer.innerText= 1;


// solicito y valido nombre jugador (NO esp.vacío, NO punto, NO saltear con Aceptar o Cancelar)
let nombre = prompt("Ingresa tu nombre para comenzar a jugar")
while (nombre == " " || nombre == "." || !nombre) {
  nombre = prompt("UPS !!...Ingresa un nombre válido");
}

//paso nombre a mayusculas y lo seteo en el marcador
nombre = nombre.toUpperCase()
nombrePlayer.innerHTML = nombre;


//programo el inicio del turno con la seleccion de una opcion del jugador
let botones = document.querySelectorAll(".eleccion");
botones.forEach(boton => {
  boton.addEventListener("click", ronda);
});


function ronda () {
  let valores = { 0: 'piedra', 1: 'papel', 2: 'tijeras' };
  let jugadaComputador = valores[Math.floor(Math.random() * 3)];

 
 
 
 
 
 
  // marcadorPlayer.innerText = 1;
  // return;
}


































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