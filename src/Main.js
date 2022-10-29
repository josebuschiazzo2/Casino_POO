"use strict";
exports.__esModule = true;
var JuegoDeDados_1 = require("./JuegoDeDados");
var Ruleta_1 = require("./Ruleta");

var TresEnLinea_1 = require("./TresEnLinea");
var readlineSync = require('readline-sync');
var juegoDeDados1 = new JuegoDeDados_1.Dado("juego de dados", 1, 0.5);
var juegoDeRuleta1 = new Ruleta_1.Ruleta("Pleno", 1, 12);
var Fruits = new TresEnLinea_1.TresEnLinea("Pleno", 1, 12);
var juegos = new Array;
juegos = [Fruits, juegoDeRuleta1, juegoDeDados1];
//console.log(juegoDeDados1.lanzarDados());
//console.log(juegoDeRuleta1.lanzarRuleta());
console.log(Fruits.girar());
/*case 2 USAR SWITCH CASE
juegoDeDados1.setApuesta(rl.question("Cuanto quiere apostar",respuesta=>{}))  Ver como ingresar las preguntas read-line-sync*/
var userName = readlineSync.question('Bienvenido Al Casino Oasis, ¿Como te llamas? ');
console.log('Bienvenido ' + userName + '!');
if (readlineSync.keyInYN('Quieres jugar a ' + Fruits.obtenerNombre() + "?")) {
    // 'Y' key was pressed.
    console.log('iniciando ' + Fruits.obtenerNombre());
    // Do something...
}
else {
    // Another key was pressed.
    console.log('Searching another...');
    // Do something...
}
var index = readlineSync.keyInSelect(juegos, 'Que Juego?');
console.log('Ok, ' + juegos[index] + ' goes to your room.');



