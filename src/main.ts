import { Dado } from './JuegoDeDados';
import { Ruleta } from './Ruleta';
import { Tragamoneda } from './Tragamoneda';
import { TresEnLinea } from './TresEnLinea';

var readlineSync = require('readline-sync');



let juegoDeDados1:Dado = new Dado("juego de dados",1,0.5);
let juegoDeRuleta1:Ruleta= new Ruleta("Ruleta",1,12);
let Fruits:TresEnLinea= new TresEnLinea("Tres en linea",1,12);
let juegos = new Array<Tragamoneda>
juegos = [Fruits,juegoDeRuleta1,juegoDeDados1]; // array de prueba


// console.log(juegoDeRuleta1.lanzarRuleta());

// console.log(Fruits.girar());
/*case 2 USAR SWITCH CASE
juegoDeDados1.setApuesta(rl.question("Cuanto quiere apostar",respuesta=>{}))  Ver como ingresar las preguntas read-line-sync*/

// ReadLine para dar la bienvenida y preguntar el nombre
var userName = readlineSync.question('Bienvenido Al Casino Oasis, ¿Como te llamas? ');
console.log('Bienvenido ' + userName + '!');

var apuesta = readlineSync.question('¿cuanto quiere apostar? ');

// readline para elegir opciones de un arreglo y elegir el juego

let index:string = readlineSync.keyInSelect(juegos, 'Elija el Juego');

switch (index) {
    case "1":
        console.log(juegoDeDados1.lanzarDados());
        break;
    case "2":
        console.log(juegoDeRuleta1.lanzarRuleta());
        break;
    case "3":
        console.log(Fruits.girar());
        break;

    default:
        console.log( 'Salir; gracias pore sus compras, vuelvas pontros');
        break;
}


// console.log('Ok, ' + juegos[index]);

    

//Readline para Preguntar Si o No Y/N
if (readlineSync.keyInYN('Quieres jugar a ' + juegoDeDados1.obtenerNombre() + "?")) {
    // 'Y' key was pressed.
    juegoDeDados1.setApuesta(apuesta); 
    console.log('iniciando ' + juegoDeDados1.obtenerNombre());
    console.log("-------");
    console.log('Su jugada es ' + juegoDeDados1.lanzarDados());
    console.log("-------");
    console.log("este es el premio ",juegoDeDados1.getPremio());
    // Do something...
  } else {
    // Another key was pressed.
    console.log('Searching another...');
    // Do something...
  } 
  

  

