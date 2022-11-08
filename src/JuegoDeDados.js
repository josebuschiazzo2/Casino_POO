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
var readlineSync = require('readline-sync');
var art = require('ascii-art');
var Dado = /** @class */ (function (_super) {
    __extends(Dado, _super);
    function Dado(nombre, apuesta, probabilidad) {
        var _this = _super.call(this, nombre, apuesta, probabilidad) || this;
        _this.winner = 0;
        return _this;
    }
    Dado.prototype.apostar = function () {
        var apuesta = readlineSync.question('cuanto quiere apostar? ');
        while (apuesta <= 0 || isNaN(apuesta)) {
            console.log(art.style(' ', 'red'));
            console.log("apuesta Incorrecta. ingrese un numero mayor a 0");
            console.log(art.style(' ', 'white'));
            var apuesta = readlineSync.question('cuanto quiere apostar? ');
        }
        ;
        return apuesta;
    };
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
        dado1 = Math.floor(Math.random() * (max - min + 1) + min);
        dado2 = Math.floor(Math.random() * (max - min + 1) + min);
        console.log("Lanzamiento de dados");
        console.log("dado 1 = ", dado1);
        console.log("dado 2 = ", dado2);
        resultado = dado1 + dado2;
        switch (resultado) {
            case 7:
                this.winner = 5;
                console.log("ha salido ", resultado, " Felicitaciones usted ha ganado $$", this.apuesta * this.winner);
                break;
            case 11:
                this.winner = 15;
                console.log("ha salido ", resultado, " Felicitaciones usted ha ganado $$", this.apuesta * this.winner);
                break;
            case 4:
            case 5:
            case 6:
            case 8:
            case 10:
                console.log("ha salido ", resultado, "No ha ganado ningun premio pero usted puede lanzar nuevamente");
                console.log("........");
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
