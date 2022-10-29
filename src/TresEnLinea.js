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
exports.TresEnLinea = void 0;
var Tragamoneda_1 = require("./Tragamoneda");
var TresEnLinea = /** @class */ (function (_super) {
    __extends(TresEnLinea, _super);
    function TresEnLinea(nombre, apuesta, probabilidad) {
        var _this = _super.call(this, nombre, apuesta, probabilidad) || this;
        _this.rodillo1 = new Array;
        _this.rodillo2 = new Array;
        _this.rodillo3 = new Array;
        _this.rodillo1 = ["Manzana", "Pera", "Limon", "Wild", "Siete", "Cereza"];
        _this.rodillo2 = ["Manzana", "Pera", "Limon", "Wild", "Siete", "Cereza"];
        _this.rodillo3 = ["Manzana", "Pera", "Limon", "Wild", "Siete", "Cereza"];
        return _this;
    }
    TresEnLinea.prototype.setApuesta = function (cantidad) {
        this.apuesta = cantidad;
    };
    TresEnLinea.prototype.getPremio = function () {
        return this.apuesta * 3; // el 3 debe ser una variable  dependiendo del switch case 
    };
    TresEnLinea.prototype.apostar = function () {
        throw new Error('Method not implemented.');
    };
    TresEnLinea.prototype.posicionRodillo = function () {
        var posRodillo = Math.floor(Math.random() * (5 - 0 + 1) + 0);
        return posRodillo;
    };
    TresEnLinea.prototype.girar = function () {
        return this.rodillo1[this.posicionRodillo()] + "--" + this.rodillo2[this.posicionRodillo()] + "--" + this.rodillo3[this.posicionRodillo()];
        /* realizar los condicionales y devolver los premios
        utilizar switch case*/
    };
    return TresEnLinea;
}(Tragamoneda_1.Tragamoneda));
exports.TresEnLinea = TresEnLinea;
