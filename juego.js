"use strict";

String.prototype.replace = function (index, character) {
  return this.substring(0, index) + this.substring(index + character.length);
};

//Uso: palabraconguiones = palabraconguiones.replaceAT(i * 2, letra);

const normal = [
  "abono",
  "abuelo",
  "aceite",
  "basura",
  "broma",
  "bañera",
  "cabaña",
  "cables",
  "cereza",
  "dinero",
  "dragon",
  "dormir",
  "encima",
  "fresco",
  "gritar",
  "herida",
  "moneda",
];

const palabra = normal[Math.floor(Math.random() * normal.length)];

let palabraconguiones = palabra.replace(/./g, " ");
let contadorfallos = 0;

document.querySelector("output").innerHTML = palabraconguiones;
document.querySelector("#calcular").addEventListener("click", () => {
  const letra = document.querySelector("#letra").value;
  let hafallado = true;
  for (const i in palabra) {
    if (letra == palabra[i]) {
      palabraconguiones = palabraconguiones.replaceAt(i * 2, letra);
      hafallado = false;
    }
  }

  if (hafallado) {
    contadorfallos++;
    //y aqui se irían colocando lad imagenes de los fallos, creo q te lo escribio a ti,si?
    if (contadorfallos == 6) {
      alert("perdiste el juego");
    }
  } else {
    if (palabraconguiones.indexOf("") < 0) {
      alert("has ganado");
    }
  }

  document.querySelector("#output").innerHTML = palabraconguiones;

  document.querySelector("#letra").value = "";
  document.querySelector("#letra").focus();
});
