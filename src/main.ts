import { Casino } from './Casino';
import { Dado } from './JuegoDeDados';
import { Ruleta } from './Ruleta';
import { TresEnLinea } from './TresEnLinea';
var fs = require('fs');
var readlineSync = require('readline-sync');

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



let juegoDeDados1:Dado = new Dado("juego de dados",1,0.5);
let juegoDeRuleta1:Ruleta= new Ruleta("Color",1,1);
let fruits:TresEnLinea= new TresEnLinea("Tres en linea",10,2);
let juegos = new Array<string>
juegos = [juegoDeDados1.obtenerNombre(),juegoDeRuleta1.obtenerNombre(),fruits.obtenerNombre()]; // array de prueba
let oasis:Casino = new Casino("Oasis");

oasis.agregarJuegos(juegoDeDados1);
oasis.agregarJuegos(juegoDeRuleta1);
oasis.agregarJuegos(fruits);

// console.log(juegoDeRuleta1.lanzarRuleta());

 fruits.girar();
 console.log(fruits.getPremio());
/*case 2 USAR SWITCH CASE
juegoDeDados1.setApuesta(rl.question("Cuanto quiere apostar",respuesta=>{}))  Ver como ingresar las preguntas read-line-sync*/

// ReadLine para dar la bienvenida y preguntar el nombre
//var userName = readlineSync.question('Bienvenido Al Casino Oasis, ¿Como te llamas? ');
//console.log('Bienvenido ' + userName + '!');

//var apuesta = readlineSync.question('¿cuanto quiere apostar? ');

  // readline para elegir opciones de un arreglo y elegir el juego

let index:number = readlineSync.keyInSelect(juegos, 'Elija el Juego');

switch (index) {
    case 0:
        console.log(juegoDeDados1.lanzarDados());
        break;
    case 1:
        console.log(juegoDeRuleta1.lanzarRuleta());
        break;
    case 2:
      var userName = readlineSync.question('Bienvenido Al Casino Oasis, ¿Como te llamas? ');
      console.log('Bienvenido ' + userName + '!');
      console.log('Comencemos a jugar al ' + fruits.obtenerNombre());
      var apuesta:number = readlineSync.question('cuanto quiere apostar? ');
      fruits.setApuesta(apuesta);
      while (readlineSync.keyInYN('Quiere girar los rodillos?')) {
        // 'Y' key was pressed.
        fruits.girar(); 
        console.log(fruits.getPremio());
        console.log(fruits.obtenerPozo())
      }
     
        break; 

    default:
        console.log( 'Salir; gracias pore sus compras, vuelvas pontros');
        break;
}


// console.log('Ok, ' + juegos[index]);

    

//Readline para Preguntar Si o No Y/N
/*if (readlineSync.keyInYN('Quieres jugar a ' + Fruits.obtenerNombre() + "?")) {
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

  

