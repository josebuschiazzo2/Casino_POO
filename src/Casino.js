"use strict";
exports.__esModule = true;
var Tragamoneda_1 = require("./Tragamoneda");
var Casino = /** @class */ (function () {
    function Casino() {
        this.juegos = new Array < Tragamoneda_1.Tragamoneda >
            constructor(nombre, string);
    }
    return Casino;
}());
exports.Casino = Casino;
{
    this.nombre = nombre;
}
agregarJuegos(juego, Tragamoneda_1.Tragamoneda);
void {
    "this": .juegos.push(juego)
};
eliminarJuego(juego, Tragamoneda_1.Tragamoneda);
void {
    : .juegos.length, index: index
}++;
{
    if (juego.obtenerNombre() === this.juegos[index].obtenerNombre()) {
        this.juegos.splice(index, 1);
    }
}
obtenerNombre();
string;
{
    return this.nombre;
}
modificarNombre(nuevoNombre, string);
{
    this.nombre = nuevoNombre;
}
