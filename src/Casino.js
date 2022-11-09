"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var fs = require('fs');
var Casino = /** @class */ (function () {
    function Casino(nombre) {
        this.juegos = new Array;
        this.nombre = nombre;
    }
    Casino.prototype.agregarJuegos = function (juego) {
        this.juegos.push(juego);
    };
    Casino.prototype.eliminarJuego = function (juego) {
        for (var index = 0; index < this.juegos.length; index++) {
            if (juego.obtenerNombre() === this.juegos[index].obtenerNombre()) {
                this.juegos.splice(index, 1);
            }
        }
    };
    Casino.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    Casino.prototype.modificarNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Casino.prototype.escribirArchivo = function (nombreDelArchivo, texto) {
        fs.appendFile(nombreDelArchivo, texto + "\n", function (error) {
            if (error) {
                console.log('ERROR');
            }
        });
    };
    Casino.prototype.leerArchivo = function (path) {
        var txtFile = fs.readFileSync(path, 'utf-8');
        return txtFile;
    };
    return Casino;
}());
exports.Casino = Casino;
