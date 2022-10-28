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
exports.Ruleta = void 0;
var Tragamoneda_1 = require("./Tragamoneda");
/*En ese diseño, el orden se basa en las siguientes normas:

A cada lado de un número menor o igual a 18 hay un número mayor que 18 y viceversa, con dos excepciones: a) el cero, b) justo enfrente de él con el 5 y el 10 juntos.
Los números negros son aquellos en los que la reducción de la suma de sus dígitos es par. Así, por ejemplo, el 29 es negro (2 + 9 = 11, 1 + 1 = 2). Las excepciones son el 10 y el 28 (ambos negros).
Partiendo el plato por la mitad, con una línea imaginaria entre el 0 y el 5, en cada una de las mitades debe haber la misma cantidad de números que pertenezcan a cada una de las 3 docenas (6 números de cada docena) y la misma cantidad de números que pertenezcan a cada una de las 3 columnas (6 números de cada columna).
Los números rojos y negros deben estar alternados.
Los números pares e impares deben estar distribuidos de forma regular, de manera que no haya más de dos números pares o impares adyacentes.
Estas normas se cumplen en la ruleta europea (con un cero), pero no en la americana (con doble cero), donde la distribución es más irregular.


*Tabla de apuestas y pagos en la ruleta //lo dejo en (color, ParImpar, Columna, Docena, Cuadro y pleno)

N° de juego             Números que juega	    Elección        Pago
1.Color                 18 números              Rojo o Negro    2×1
2.ParImpar   	        18 números	            Par o Impar     2×1
3.Columnas 	            12 números	            1, 2 o 3        3×1
4. Docenas	            12 números	            1, 2 o 3        3×1
5.Cuadro	            4 números	            del 1 al 24     9×1
6.Pleno	                1 número                del 1 a 36      36×1
*/
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(nombre, apuesta, probabilidad) {
        var _this = _super.call(this, nombre, apuesta, probabilidad) || this;
        _this.nombre = nombre;
        _this.apuesta = apuesta;
        _this.probabilidad = probabilidad;
        return _this;
    }
    Ruleta.prototype.setApuesta = function (number) {
        throw new Error("Method not implemented.");
    };
    Ruleta.prototype.getPremio = function () {
        throw new Error("Method not implemented.");
    };
    Ruleta.prototype.lanzarRuleta = function () {
        var max = 36;
        var min = 0;
        var casilla = 0; // hay 37
        var color = "Neutro"; // Rojo, Negro, neutro (que sea impar no significa que sea rojo, por ejemplo el 10 y 11 son Negro both)
        var par = true; //Par o impar
        var docena = 0; // hay 3 docenas y el cero no entra
        var columna = 0; // hay 3 Columnas y el cero no entra
        var cuadro = [0, 0, 0, 0]; // hay 24 cuadros pero una casilla puede tener hasta 4 cuadros y el cero no entra
        var premio;
        casilla = Math.floor(Math.random() * (max - min + 1) + min); //casilla = Math.floor(Math.random() * (max + 1));
        console.log("Lanzamiento de bola..... no va más!!");
        setTimeout(function () { console.log("........."); }, 500);
        //Coloco este switch para asignar las valibles de la casilla
        switch (casilla) {
            case 0:
                color = "Neutro";
                par = true;
                docena = 0;
                columna = 0;
                break;
            case 1:
                color = "Rojo";
                par = false;
                docena = 1;
                columna = 1;
                cuadro = [1, 0, 0, 0];
                break;
            case 2:
                color = "Negro";
                par = true;
                docena = 1;
                columna = 2;
                cuadro = [1, 2, 0, 0];
                break;
            case 3:
                color = "Rojo";
                par = false;
                docena = 1;
                columna = 3;
                cuadro = [2, 0, 0, 0];
                break;
            case 4:
                color = "Negro";
                par = true;
                docena = 1;
                columna = 1;
                cuadro = [1, 3, 0, 0];
                break;
            case 5:
                color = "Rojo";
                par = false;
                docena = 1;
                columna = 2;
                cuadro = [1, 2, 3, 4];
                break;
            case 6:
                color = "Negro";
                par = true;
                docena = 1;
                columna = 3;
                cuadro = [2, 4, 0, 0];
                break;
            case 7:
                color = "Rojo";
                par = false;
                docena = 1;
                columna = 1;
                cuadro = [3, 5, 0, 0];
                break;
            case 8:
                color = "Negro";
                par = true;
                docena = 1;
                columna = 2;
                cuadro = [3, 4, 5, 6];
                break;
            case 9:
                color = "Rojo";
                par = false;
                docena = 1;
                columna = 3;
                cuadro = [4, 6, 0, 0];
                break;
            case 10:
                color = "Negro";
                par = true;
                docena = 1;
                columna = 1;
                cuadro = [5, 7, 0, 0];
                break;
            case 11:
                color = "Negro";
                par = false;
                docena = 1;
                columna = 2;
                cuadro = [5, 6, 7, 8];
                break;
            case 12:
                color = "Rojo";
                par = true;
                docena = 1;
                columna = 3;
                cuadro = [6, 8, 0, 0];
                break;
            case 13:
                color = "Negro";
                par = false;
                docena = 2;
                columna = 1;
                cuadro = [7, 9, 0, 0];
                break;
            case 14:
                color = "Rojo";
                par = true;
                docena = 2;
                columna = 2;
                cuadro = [7, 8, 9, 10];
                break;
            case 15:
                color = "Negro";
                par = false;
                docena = 2;
                columna = 3;
                cuadro = [8, 10, 0, 0];
                break;
            case 16:
                color = "Rojo";
                par = true;
                docena = 2;
                columna = 1;
                cuadro = [9, 11, 0, 0];
                break;
            case 17:
                color = "Negro";
                par = false;
                docena = 2;
                columna = 2;
                cuadro = [9, 10, 11, 12];
                break;
            case 18:
                color = "Rojo";
                par = true;
                docena = 2;
                columna = 3;
                cuadro = [10, 12, 0, 0];
                break;
            case 19:
                color = "Rojo";
                par = false;
                docena = 2;
                columna = 1;
                cuadro = [11, 13, 0, 0];
                break;
            case 20:
                color = "Negro";
                par = true;
                docena = 2;
                columna = 2;
                cuadro = [11, 12, 13, 14];
                break;
            case 21:
                color = "Rojo";
                par = false;
                docena = 2;
                columna = 3;
                cuadro = [12, 14, 0, 0];
                break;
            case 22:
                color = "Negro";
                par = true;
                docena = 2;
                columna = 1;
                cuadro = [13, 15, 0, 0];
                break;
            case 23:
                color = "Rojo";
                par = false;
                docena = 2;
                columna = 2;
                cuadro = [13, 14, 15, 16];
                break;
            case 24:
                color = "Negro";
                par = true;
                docena = 2;
                columna = 3;
                cuadro = [14, 16, 0, 0];
                break;
            case 25:
                color = "Rojo";
                par = false;
                docena = 3;
                columna = 1;
                cuadro = [15, 17, 0, 0];
                break;
            case 26:
                color = "Negro";
                par = true;
                docena = 3;
                columna = 2;
                cuadro = [15, 16, 17, 18];
                break;
            case 27:
                color = "Rojo";
                par = false;
                docena = 3;
                columna = 3;
                cuadro = [16, 18, 0, 0];
                break;
            case 28:
                color = "Negro";
                par = true;
                docena = 3;
                columna = 1;
                cuadro = [17, 19, 0, 0];
                break;
            case 29:
                color = "Negro";
                par = false;
                docena = 3;
                columna = 2;
                cuadro = [17, 18, 19, 20];
                break;
            case 30:
                color = "Rojo";
                par = true;
                docena = 3;
                columna = 3;
                cuadro = [18, 20, 0, 0];
                break;
            case 31:
                color = "Negro";
                par = false;
                docena = 3;
                columna = 1;
                cuadro = [19, 21, 0, 0];
                break;
            case 32:
                color = "Rojo";
                par = true;
                docena = 3;
                columna = 2;
                cuadro = [19, 20, 21, 22];
                break;
            case 33:
                color = "Negro";
                par = false;
                docena = 3;
                columna = 3;
                cuadro = [20, 22, 0, 0];
                break;
            case 34:
                color = "Rojo";
                par = true;
                docena = 3;
                columna = 1;
                cuadro = [21, 23, 0, 0];
                break;
            case 35:
                color = "Negro";
                par = false;
                docena = 3;
                columna = 2;
                cuadro = [21, 22, 23, 24];
                break;
            case 36:
                color = "Rojo";
                par = true;
                docena = 3;
                columna = 3;
                cuadro = [22, 24, 0, 0];
                break;
            default:
                console.log("algo mál no ha salido bien");
                break;
        }
        console.log(color + " el " + casilla + "(Par:" + par + " - Docena:" + docena + " - Columna:" + columna + ")");
        return [color, casilla, par, docena, columna, cuadro];
    };
    Ruleta.prototype.apostar = function () {
        throw new Error("Function not implemented.");
    };
    return Ruleta;
}(Tragamoneda_1.Tragamoneda)); // fin clase Ruleta
exports.Ruleta = Ruleta;
