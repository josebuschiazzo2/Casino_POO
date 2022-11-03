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
        _this.numMax = 5;
        _this.pozo = 3000;
        if (probabilidad === 1) {
            _this.numMin = 0;
        }
        else if (probabilidad === 2) {
            _this.numMin = 1;
        }
        else if (probabilidad === 3) {
            _this.numMin = 3;
        }
        return _this;
    }
    TresEnLinea.prototype.setApuesta = function (cantidad) {
        if (cantidad <= 1) {
            this.apuesta = cantidad;
        }
        else {
            console.log("apuesta incorrecta, ingrese un valor mayor a 0");
        }
    };
    TresEnLinea.prototype.getPremio = function () {
        var premio;
        switch (this.posicionFinalRodillos) {
            case 1:
                premio = this.pozo;
                this.pozo = 3000;
                break;
            case 2:
                premio = this.apuesta * 1.5;
                this.pozo = Number(this.apuesta) + this.pozo;
                break;
            default:
                premio = 0;
                this.pozo = this.pozo + Number(this.apuesta) * 2;
                break;
        }
        return premio;
    };
    TresEnLinea.prototype.apostar = function () {
        throw new Error('Method not implemented.');
    };
    TresEnLinea.prototype.posicionRodillo = function () {
        var posRodillo = Math.floor(Math.random() * (this.numMax - this.numMin + 1) + this.numMin);
        return posRodillo;
    };
    TresEnLinea.prototype.girar = function () {
        var rodillo1 = this.rodillo1[this.posicionRodillo()];
        var rodillo2 = this.rodillo2[this.posicionRodillo()];
        var rodillo3 = this.rodillo3[this.posicionRodillo()];
        if (rodillo1 === rodillo2 && rodillo1 === rodillo3) {
            this.posicionFinalRodillos = 1;
        }
        else if (rodillo1 === rodillo2 && rodillo1 != rodillo3 || rodillo2 === rodillo3 && rodillo2 != rodillo1 || rodillo3 === rodillo1 && rodillo3 != rodillo2) {
            this.posicionFinalRodillos = 2;
        }
        else {
            this.posicionFinalRodillos = 0;
        }
        console.log(rodillo1 + " " + rodillo2 + " " + rodillo3);
    };
    TresEnLinea.prototype.obtenerPozo = function () {
        return this.pozo;
    };
    return TresEnLinea;
}(Tragamoneda_1.Tragamoneda));
exports.TresEnLinea = TresEnLinea;
