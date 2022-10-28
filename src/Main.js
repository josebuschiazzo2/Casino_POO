"use strict";
exports.__esModule = true;
var JuegoDeDados_1 = require("./JuegoDeDados");
var Ruleta_1 = require("./Ruleta");
var juegoDeDados1 = new JuegoDeDados_1.Dado("juego de dados", 1, 0.5);
var juegoDeRuleta1 = new Ruleta_1.Ruleta("Pleno", 1, 12);
//console.log(juegoDeDados1.obtenerApuesta()); // falta funcion para ingresar apuesta
juegoDeDados1.setApuesta(300);
console.log("su apuesta es de $: ", juegoDeDados1.obtenerApuesta());
console.log(juegoDeDados1.lanzarDados());
// console.log(juegoDeRuleta1.lanzarRuleta());
