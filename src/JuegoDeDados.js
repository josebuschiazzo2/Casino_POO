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
var Dado = /** @class */ (function (_super) {
    __extends(Dado, _super);
    function Dado(nombre, apuesta, probabilidad) {
        var _this = _super.call(this, nombre, apuesta, probabilidad) || this;
        _this.nombre = nombre;
        _this.apuesta = apuesta;
        _this.probabilidad = probabilidad;
        return _this;
    }
    Dado.prototype.setApuesta = function (number) {
        throw new Error("Method not implemented.");
    };
    Dado.prototype.getPremio = function () {
        throw new Error("Method not implemented.");
    };
    Dado.prototype.lanzarDados = function () {
        var max = 6;
        var min = 1;
        var dado1;
        var dado2;
        var resultado;
        var premio;
        dado1 = Math.floor(Math.random() * (max - min + 1) + min);
        dado2 = Math.floor(Math.random() * (max - min + 1) + min);
        console.log("primer lanzamiento");
        console.log("dado 1 = ", dado1);
        console.log("dado 2 = ", dado2);
        resultado = dado1 + dado2;
        console.log("La suma de los dados es : ", resultado);
        switch (resultado) {
            case 7:
                console.log("Felicitaciones usted ha ganado $$$$$$ "); //, premio
                break;
            case 11:
                console.log("Felicitaciones usted ha ganado $$$$$$ "); //, premio
                break;
            case 2:
                console.log("No ha ganado ningun premio pero usted puede lanzar nuevamente");
                dado1 = Math.floor(Math.random() * (max - min + 1) + min);
                dado2 = Math.floor(Math.random() * (max - min + 1) + min);
                console.log("dado 1 = ", dado1);
                console.log("dado 2 = ", dado2);
                resultado = dado1 + dado2;
                break;
            case 3:
                console.log("No ha ganado ningun premio pero usted puede lanzar nuevamente");
                dado1 = Math.floor(Math.random() * (max - min + 1) + min);
                dado2 = Math.floor(Math.random() * (max - min + 1) + min);
                console.log("dado 1 = ", dado1);
                console.log("dado 2 = ", dado2);
                resultado = dado1 + dado2;
                break;
            case 12:
                console.log("No ha ganado ningun premio pero usted puede lanzar nuevamente");
                dado1 = Math.floor(Math.random() * (max - min + 1) + min);
                dado2 = Math.floor(Math.random() * (max - min + 1) + min);
                console.log("dado 1 = ", dado1);
                console.log("dado 2 = ", dado2);
                resultado = dado1 + dado2;
                break;
            default:
                console.log("usted ah perdido");
                break;
        }
        /*
            if(resultado === 7 || resultado == 11){
                //premio = this.apuesta *2;
                
                console.log("Felicitaciones usted ha ganado $$$$$$ ") //, premio

             if(resultado = 2 || resultado == 3 || resultado = 12){

                dado1 = Math.floor(Math.random() * (max - min + 1) + min);
                dado2 = Math.floor(Math.random() * (max - min + 1) + min);

                console.log("No ha ganado ningun premio pero usted puede lanzar nuevamente")
                
                console.log("nuevo lanzamiento:") // funcion para que vuelta a lanzar los dados hasta ganar o perder ***
                
                console.log("dado 1 = ",dado1)
                console.log("dado 2 = ",dado2)
                
                resultado = dado1 + dado2;
             }
            } else{
                
                console.log("usted ah perdido")
            }
        */
        return resultado;
    };
    Dado.prototype.apostar = function () {
        throw new Error("Function not implemented.");
    };
    return Dado;
}(Tragamoneda_1.Tragamoneda)); // fin clase Dado
exports.Dado = Dado;
