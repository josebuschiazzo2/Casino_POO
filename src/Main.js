"use strict";
exports.__esModule = true;
var Casino_1 = require("./Casino");
var JuegoDeDados_1 = require("./JuegoDeDados");
var Ruleta_1 = require("./Ruleta");
var TresEnLinea_1 = require("./TresEnLinea");
var readlineSync = require('readline-sync');
// añadir archivo de texto de bienvenida
var fs = require('fs');
var archivoBienvenida = 'saludoDeBienvenida.txt';
var contenidoBienvenida = 'Bienvenido A Casino las Vegas o Royal u Oasis, "disfrute de nuestros juegos"\n**advertencia**\n“el juego de azar en exceso es nocivo para la salud”';
console.log('                               ');
fs.writeFileSync(archivoBienvenida, contenidoBienvenida);
console.log('**** este es el saludo de bienvenida ****');
var saludoDeBienvenida = contenidoBienvenida;
console.log(saludoDeBienvenida);
console.log('-------------------------------');
console.log('                               ');
var juegoDeDados1 = new JuegoDeDados_1.Dado("juego de dados", 1, 0.5);
var juegoDeRuleta1 = new Ruleta_1.Ruleta("Ruleta", 1, 12);
var fruits = new TresEnLinea_1.TresEnLinea("Tres en linea", 10, 2);
var juegos = new Array;
juegos = [juegoDeDados1.obtenerNombre(), juegoDeRuleta1.obtenerNombre(), fruits.obtenerNombre()]; // array de prueba
var oasis = new Casino_1.Casino("Oasis");
oasis.agregarJuegos(juegoDeDados1);
oasis.agregarJuegos(juegoDeRuleta1);
oasis.agregarJuegos(fruits);
// readline para elegir opciones de un arreglo y elegir el juego
var index = readlineSync.keyInSelect(juegos, 'Elija algunos de estos Juegos: "coloque el numero del juego deseado"');
switch (index) {
    case 0:
        var userName = readlineSync.question('¿Como te llamas? ');
        console.log('Bienvenido ' + userName + '!');
        console.log('Comencemos a jugar al ' + juegoDeDados1.obtenerNombre());
        var apuesta = readlineSync.question('cuanto quiere apostar? ');
        juegoDeDados1.setApuesta(apuesta);
        while (readlineSync.keyInYN('Quiere lanzar los dados?')) {
            // 'Y' key was pressed.
            console.log(juegoDeDados1.lanzarDados());
        }
        break;
    case 1:
        console.log(juegoDeRuleta1.lanzarRuleta());
        break;
    case 2:
        var userName = readlineSync.question('¿Como te llamas? ');
        console.log('Bienvenido ' + userName + '!');
        console.log('Comencemos a jugar al ' + fruits.obtenerNombre());
        var apuesta = readlineSync.question('cuanto quiere apostar? ');
        fruits.setApuesta(apuesta);
        while (readlineSync.keyInYN('Quiere girar los rodillos?')) {
            // 'Y' key was pressed.
            fruits.girar();
            console.log(fruits.getPremio());
            console.log(fruits.obtenerPozo());
        }
        break;
    default:
        console.log('Salir; gracias vuelva pontro');
        break;
}
// console.log('Ok, ' + juegos[index]);
/*
function jugar(){
  if (readlineSync.keyInYN('Quiere girar los rodillos?')) {
    // 'Y' key was pressed.
    fruits.girar();
    console.log(fruits.getPremio());
    // Do something...
  } else {
    // Another key was pressed.
    console.log('Searching another...');
    // Do something...
 }
  
}

//Readline para Preguntar Si o No Y/N
if (readlineSync.keyInYN('Quieres jugar a ' + Fruits.obtenerNombre() + "?")) {
    // 'Y' key was pressed.
    Fruits.setApuesta(apuesta);
    console.log('iniciando ' + Fruits.obtenerNombre());
    console.log("-------");
    console.log('Su jugada es ' + Fruits.girar());
    console.log("-------");
    console.log(Fruits.getPremio());
    // Do something...
  } else {
    // Another key was pressed.
    console.log('Searching another...');
    // Do something...
 }
*/
