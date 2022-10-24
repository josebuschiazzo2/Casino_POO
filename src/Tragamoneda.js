"use strict";
//  clase padre
exports.__esModule = true;
exports.Tragamoneda = void 0;
var Tragamoneda = /** @class */ (function () {
    function Tragamoneda(nombre, apuesta, probabilidad) {
        this.nombre = nombre;
        this.apuesta = apuesta;
        this.probabilidad = probabilidad;
    }
    Tragamoneda.prototype.obtenerApuesta = function () {
        return this.apuesta;
    };
    Tragamoneda.prototype.modificarApuesta = function (apuesta) {
        this.apuesta = apuesta;
    };
    Tragamoneda.prototype.obtenetProbabilidad = function () {
        return this.probabilidad;
    };
    return Tragamoneda;
}());
exports.Tragamoneda = Tragamoneda;
