"use strict";

String.prototype.replace = function(index, character) {
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

const palabraconguiones = palabra.replace(/./g, "_ ");

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
        document.querySelector("#ahorcado").style.backgroundposition = xxxxx; //la imagen se mueve cada vez q falles
    }
});