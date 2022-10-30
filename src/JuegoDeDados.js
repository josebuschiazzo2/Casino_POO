"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Tragamoneda_1 = require("./Tragamoneda");
/* El juego de Craps se juega con dos dados. Se lanzarán dos dados en cada partida.
Gana si la suma de los dados es 7 u 11 y pierde si la suma es igual a 2, 3 ó 12 **CRAPS**.
Cualquier otra suma de los dados Le conseguirá otro lanzamiento al jugador. El jugador debe seguir lanzando
hasta que se llegue a una decisión (gana o pierde).
Las apuestas a esta opción no se pueden modificar hasta concluir la jugada.
*/
var Dado = /** @class */ (function (_super) {
    __extends(Dado, _super);
    function Dado(nombre, apuesta, probabilidad) {
        return _super.call(this, nombre, apuesta, probabilidad) || this;
    }
    Dado.prototype.lanzarDados = function () {
        var max = 6;
        var min = 1;
        var dado1;
        var dado2;
        var resultado;
        dado1 = Math.floor(Math.random() * (max - min + 1) + min);
        dado2 = Math.floor(Math.random() * (max - min + 1) + min);
        console.log("Lanzamiento de los dados");
        console.log("dado 1 = ", dado1);
        console.log("dado 2 = ", dado2);
        resultado = dado1 + dado2;
        switch (resultado) {
            case 7:
            case 11:
                console.log("ha salido ", resultado, " Felicitaciones usted ha ganado $$", this.apuesta * 2); // falta mostra el premio
                break;
            case 4:
            case 5:
            case 6:
            case 8:
            case 10:
                console.log("ha salido ", resultado, "No ha ganado ningun premio pero usted puede lanzar nuevamente");
                break;
            default:
                console.log("ha salido ", resultado, "**CRAPS** usted ah perdido");
                break;
        }
        return resultado;
    };
    Dado.prototype.getPremio = function () {
        return this.premio;
    };
    Dado.prototype.setApuesta = function (apuesta) {
        this.apuesta = apuesta;
    };
    return Dado;
}(Tragamoneda_1.Tragamoneda)); // fin clase Dado
exports.Dado = Dado;
