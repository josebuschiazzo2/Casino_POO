import { Dado } from './JuegoDeDados';
import { Ruleta } from './Ruleta';
import { Tragamoneda } from './Tragamoneda';
import {TresEnLinea} from './TresEnLinea';

var readlineSync = require('readline-sync');

let juegoDeDados1:Dado = new Dado("juego de dados",1,0.5);
let juegoDeRuleta1:Ruleta= new Ruleta("Pleno",1,12);
let Fruits:TresEnLinea= new TresEnLinea("Pleno",1,12);

let juegos = new Array<Tragamoneda>
juegos = [Fruits,juegoDeRuleta1,juegoDeDados1]; // array de prueba
console.log(juegoDeDados1.lanzarDados());
console.log(juegoDeRuleta1.lanzarRuleta());

console.log(Fruits.girar());
/*case 2 USAR SWITCH CASE
juegoDeDados1.setApuesta(rl.question("Cuanto quiere apostar",respuesta=>{}))  Ver como ingresar las preguntas read-line-sync*/

// ReadLine para dar la bienvenida y preguntar el nombre
var userName = readlineSync.question('Bienvenido Al Casino Oasis, ¿Como te llamas? ');
console.log('Bienvenido ' + userName + '!');

//Readline para Preguntar Si o No Y/N
if (readlineSync.keyInYN('Quieres jugar a ' + Fruits.obtenerNombre() + "?")) {
    // 'Y' key was pressed.
    console.log('iniciando ' + Fruits.obtenerNombre());
    // Do something...
  } else {
    // Another key was pressed.
    console.log('Searching another...');
    // Do something...
  }

  // readline para elegir opciones de un arreglo
  let index:number = readlineSync.keyInSelect(juegos, 'Que Juego?');
console.log('Ok, ' + juegos[index] + ' goes to your room.');