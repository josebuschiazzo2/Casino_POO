"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Dado = void 0;
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
        var _this = _super.call(this, nombre, apuesta, probabilidad) || this;
        _this.winner = 0;
        return _this;
    }
    Dado.prototype.getPremio = function () {
        return this.apuesta * this.winner;
    };
    Dado.prototype.setApuesta = function (apuesta) {
        this.apuesta = apuesta;
    };
    Dado.prototype.lanzarDados = function () {
        var max = 6;
        var min = 1;
        var dado1;
        var dado2;
        var resultado;
        var winner;
        dado1 = Math.floor(Math.random() * (max - min + 1) + min);
        dado2 = Math.floor(Math.random() * (max - min + 1) + min);
        console.log("Lanzamiento de dados");
        console.log("dado 1 = ", dado1);
        console.log("dado 2 = ", dado2);
        resultado = dado1 + dado2;
        switch (resultado) {
            case 7:
                this.winner = 5;
                console.log("ha salido ", resultado, " Felicitaciones usted ha ganado $$", this.apuesta * this.winner); // winner multiplica la apuesta en getPremio
                break;
            case 11:
                this.winner = 15;
                console.log("ha salido ", resultado, " Felicitaciones usted ha ganado $$", this.apuesta * this.winner); // winner multiplica la apuesta en getPremio
                break;
            case 4:
            case 5:
            case 6:
            case 8:
            case 10:
                console.log("ha salido ", resultado, "No ha ganado ningun premio pero usted puede lanzar nuevamente");
                console.log("*******");
                console.log("su siguiente lanzamiento es: ");
                //this.lanzarDados(); 
                break;
            default:
                console.log("ha salido ", resultado, "**CRAPS** usted ah perdido");
                break;
        }
        return resultado;
    };
    return Dado;
}(Tragamoneda_1.Tragamoneda)); // fin clase Dado
exports.Dado = Dado;
