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
exports.CincoEnLinea = void 0;
var Tragamoneda_1 = require("./Tragamoneda");
var CincoEnLinea = /** @class */ (function (_super) {
    __extends(CincoEnLinea, _super);
    function CincoEnLinea(nombre, apuesta, probabilidad) {
        var _this = _super.call(this, nombre, apuesta, probabilidad) || this;
        _this.rodillo1 = new Array;
        _this.rodillo2 = new Array;
        _this.rodillo3 = new Array;
        _this.rodillo4 = new Array;
        _this.rodillo5 = new Array;
        _this.rodillo1 = ["MONEDA", "DIAMANTE", "TREBOL", "PICAS", "CORAZON", "WILD"];
        _this.rodillo2 = ["MONEDA", "DIAMANTE", "TREBOL", "PICAS", "CORAZON", "WILD"];
        _this.rodillo3 = ["MONEDA", "DIAMANTE", "TREBOL", "PICAS", "CORAZON", "WILD"];
        _this.rodillo4 = ["MONEDA", "DIAMANTE", "TREBOL", "PICAS", "CORAZON", "WILD"];
        _this.rodillo5 = ["MONEDA", "DIAMANTE", "TREBOL", "PICAS", "CORAZON", "WILD"];
        _this.numMax = 5;
        _this.pozo = 10000;
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
    CincoEnLinea.prototype.setApuesta = function (cantidad) {
        this.apuesta = cantidad;
    };
    CincoEnLinea.prototype.getPremio = function () {
        var premio;
        switch (this.posicionFinalRodillos) {
            case 1:
                premio = this.pozo;
                this.pozo = 3000;
                break;
            case 2:
                premio = this.apuesta * 2.5;
                this.pozo = Number(this.apuesta) + this.pozo;
                break;
            default:
                premio = 0;
                this.pozo = this.pozo + Number(this.apuesta) * 5;
                break;
        }
        return premio;
    };
    CincoEnLinea.prototype.apostar = function () {
        throw new Error('Method not implemented.');
    };
    CincoEnLinea.prototype.posicionRodillo = function () {
        var posRodillo = Math.floor(Math.random() * (this.numMax - this.numMin + 1) + this.numMin);
        return posRodillo;
    };
    CincoEnLinea.prototype.girar = function () {
        var rodillo1 = this.rodillo1[this.posicionRodillo()];
        var rodillo2 = this.rodillo2[this.posicionRodillo()];
        var rodillo3 = this.rodillo3[this.posicionRodillo()];
        var rodillo4 = this.rodillo4[this.posicionRodillo()];
        var rodillo5 = this.rodillo5[this.posicionRodillo()];
        if (rodillo1 === rodillo2 && rodillo1 === rodillo3 && rodillo3 === rodillo4 && rodillo4 === rodillo5) {
            this.posicionFinalRodillos = 1;
        }
        else if (rodillo1 === rodillo2 || rodillo2 === rodillo3 || rodillo3 === rodillo4 || rodillo4 === rodillo5) {
            this.posicionFinalRodillos = 2;
        }
        else {
            this.posicionFinalRodillos = 0;
        }
        console.log(rodillo1 + " " + rodillo2 + " " + rodillo3 + " " + rodillo4 + " " + rodillo5);
    };
    CincoEnLinea.prototype.obtenerPozo = function () {
        return this.pozo;
    };
    return CincoEnLinea;
}(Tragamoneda_1.Tragamoneda));
exports.CincoEnLinea = CincoEnLinea;
