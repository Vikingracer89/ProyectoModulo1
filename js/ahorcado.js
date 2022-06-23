"use strict";

const State = {
  dificultad: 1,
  palabra: "",
  intentos: 0,
  fallos: 0,
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

// constante de prueba, borrar
const gameWin = true;

function showPanel(panel) {
  panel.classList.remove("hidden");
}

function hideAllPanel() {
  presentacion.classList.add("hidden");
  juego.classList.add("hidden");
  lose.classList.add("hidden");
  win.classList.add("hidden");
}

function main() {
  showPanel(presentacion);
  const presentacionButton = presentacion.querySelector("button");

  presentacionButton.addEventListener("click", () => {
    seleccionarDificultad();
    hideAllPanel();
    showJuego();
  });
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

//const imgElement = document.createElement("img");
//imgElement.setAttribute("src",`./img/${State.fallos}.jpg`)
//imgElement.setAttribute("alt", "Ahorcado")

function getWord(arrayPalabras) {
  const lengtArray = arrayPalabras.length;
  const palabraSelecionada = arrayPalabras[getRandomNumber(lengtArray - 1)];
  console.log(palabraSelecionada);
  return palabraSelecionada;
}

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

  console.log("La palabra selecionada es:", State.palabra);

  // desarrollar el juego

  /*
  if (gameWin === true) {
    hideAllPanel();
    showWin();
  } else {
    {
      hideAllPanel();
      showLose();
    }
  }
  */
}

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

// Seleccionar dificultad

function seleccionarDificultad() {
  let dificultad = document.getElementById("Dificultad");
  State.dificultad = +Dificultad.value;
}

// se supone que la funcion deberia retornar un array segun la seleccion del usuario.
// La funcion lee y retorna el valor de la seleccion correctamente, pero no se como pasar esa seleccion a una constante y que el juego lea solo esa constante.
