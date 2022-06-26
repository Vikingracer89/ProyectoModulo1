"use strict";

// valores del juego
const State = {
  dificultad: 1,
  palabraSelecionada: "",
  intentos: 0,
  contadorfallos: 0,
};
let solucion = '';
//Importacion de constantes desde modulos

import { faciles } from "./diffacil.js";
import { normal } from "./difnormal.js";
import { dificil } from "./difdificil.js";

//Paneles

const presentacion = document.querySelector(".presentacion");
const juego = document.querySelector(".juego");
const lose = document.querySelector(".lose");
const win = document.querySelector(".win");

// muestra los paneles

function showPanel(panel) {
  panel.classList.remove("hidden");
}

// Esconde los paneles

function hideAllPanel() {
  presentacion.classList.add("hidden");
  juego.classList.add("hidden");
  lose.classList.add("hidden");
  win.classList.add("hidden");
}

// Funcion principal

function main() {
  showPanel(presentacion);
  const presentacionButton = presentacion.querySelector("button");

  presentacionButton.addEventListener("click", () => {
    seleccionarDificultad();
    hideAllPanel();
    showJuego();
  });
}

// panel del juego

function showJuego() {
  showPanel(juego);
  console.log("Estoy en el panel juego. Dificultad:", State.dificultad);

  if (State.dificultad === 1) {
    State.palabraSelecionada = getWord(faciles);
    palabraAGuiones();
  } else if (State.dificultad === 2) {
    State.palabraSelecionada = getWord(normal);
    palabraAGuiones();
  } else {
    State.palabraSelecionada = getWord(dificil);
    palabraAGuiones();
  }

  console.log("La palabra selecionada es:", State.palabraSelecionada);
}

// desarrollo del juego

// Seleccionar dificultad

function seleccionarDificultad() {
  let dificultad = document.getElementById("Dificultad");
  State.dificultad = +dificultad.value;
}

// Random number para aleatorizar las palabras

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Seleccion de la palabra

function getWord(arrayPalabras) {
  const lengtArray = arrayPalabras.length;
  State.palabraSelecionada = arrayPalabras[getRandomNumber(lengtArray - 1)];
  console.log(State.palabraSelecionada);
  //State.palabraSelecionada = palabraSelecionada;
  return State.palabraSelecionada;
}

function palabraAGuiones() {
  let lonPalabra = State.palabraSelecionada.length;
  let palabraConGuiones = '';
  for (let i = 0; i < lonPalabra; i++) {
    palabraConGuiones += '-';    
  }
  State.palabraConGuiones = palabraConGuiones;
  addP();
}

// Pone las palabras con guiones
//let palabraConGuiones = State.palabraSelecionada.replace(/./g, "_ ");

//inserta la pabra con guiones en el HTML
//document.querySelector("#output").createTextNode = State.palabraConGuiones;

function addP() {
  const secElement = document.getElementById('game');
  const pElement = document.createElement('p');
  pElement.setAttribute('id', 'output');
  pElement.textContent = `${State.palabraConGuiones}`;
  secElement.append(pElement);
}

//comprobacion de acierto/fallo al pulsar el boton
document.querySelector("#comprobarLetra").addEventListener("click", () => {
  const letra = document.querySelector("#letra").value;

  const palSel = State.palabraSelecionada;
  const palGui = State.palabraConGuiones;  

  if (palSel.includes(letra)) {
    for (let i = 0; i < palSel.length; i++) {
      if (palSel[i] == letra) {
        solucion += letra;
      } else {
        solucion += palGui[i];
      };      
    }
    State.palabraConGuiones = solucion;
    solucion = '';
    if (document.getElementById('output')) {
      document.getElementById('output').remove();
      addP();
    }
    
    if (State.palabraConGuiones == State.palabraSelecionada) {
      showWin();
    }
  } else {
    State.contadorfallos++;
    if (State.contadorfallos == 6) {
      showLose();
    }
  }

  //resetea el input
  document.querySelector("#letra").value = "";
  document.querySelector("#letra").focus();
});


// panel ganador

function showWin() {
  hideAllPanel();
  showPanel(win);
  document.getElementById('output').remove();

  const homeButton = win.querySelector("button", 'home');
  homeButton.addEventListener("click", () => {
    hideAllPanel();
    main();
  });

  const againButton = win.querySelector("button", 'again');
  againButton.addEventListener("click", () => {
    hideAllPanel();
    showJuego();
  });
}

// Panel perdedor

function showLose() {
  hideAllPanel();
  showPanel(lose);
  document.getElementById('output').remove();

  const homeButton = lose.querySelector("button", 'home');
  homeButton.addEventListener("click", () => {
    hideAllPanel();
    main();
  });
  
  const againButton = lose.querySelector("button", 'again');
  againButton.addEventListener("click", () => {
    hideAllPanel();
    showJuego();
  });
}

main();
//getWord(arrayPalabras);
console.log(State);