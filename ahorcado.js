"use strict";

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
const gameWin = false;

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
    hideAllPanel();
    showJuego();
  });
}

function showJuego() {
  showPanel(juego);
  if (gameWin === true) {
    () => {
      hideAllPanel();
      showWin();
    };
  } else {
    {
      () => {
        hideAllPanel();
        showLose();
      };
    }
  }
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
