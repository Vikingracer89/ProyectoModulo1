"use strict";

// valores del juego
const State = {
  dificultad: 1,
  palabraSelecionada: "",
  intentos: 0,
  contadorfallos: 0,
};

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
    State.palabra = getWord(faciles);
  } else if (State.dificultad === 2) {
    State.palabra = getWord(normal);
  } else {
    State.palabra = getWord(dificil);
  }

  console.log("La palabra selecionada es:", State.palabraSelecionada);
}

// desarrollo del juego

// Seleccionar dificultad

function seleccionarDificultad() {
  let dificultad = document.getElementById("Dificultad");
  State.dificultad = +Dificultad.value;
}

// Random number para aleatorizar las palabras

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Seleccion de la palabra

function getWord(arrayPalabras) {
  const lengtArray = arrayPalabras.length;
  const palabraSelecionada = arrayPalabras[getRandomNumber(lengtArray - 1)];
  console.log(palabraSelecionada);
  return palabraSelecionada;
}

// Pone las palabras con guiones
let palabraConGuiones = State.palabraSelecionada.replace(/./g, "_ ");

//inserta la pabra con guiones en el HTML
document.querySelector("#output").innerHTML = palabraConGuiones;

//comprobacion de acierto/fallo al pulsar el boton
document.querySelector("#comprobarLetra").addEventListener("click", () => {
  const letra = document.querySelector("#letra").value;
  let hafallado = true;
  for (const i in State.palabraSelecionada) {
    if (letra == palabra[i]) {
      palabraConGuiones = palabraConGuiones.replaceAt(i * 2, letra);
      hafallado = false;
    }
  }

  //Condiciones de Victoria/Derrota
  if (hafallado) {
    State.contadorfallos++;
    if (State.contadorfallos == 6) {
      hideAllPanel();
      showLose();
    }
  } else {
    if (palabraConGuiones.indexOf("") < 0) {
      hideAllPanel();
      showWin();
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

  backButton.addeventListener("click", () => {
    hideAllPanel();
    showMain();
  });

  AgainButton.addeventListener("click", () => {
    hideAllPanel();
    showJuego();
  });
}

// Panel perdedor

function showLose() {
  hideAllPanel();
  showPanel(lose);

  backButton.addeventListener("click", () => {
    hideAllPanel();
    showMain();
  });

  AgainButton.addeventListener("click", () => {
    hideAllPanel();
    showJuego();
  });
}

main();
