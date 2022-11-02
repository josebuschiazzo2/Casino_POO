import { Casino } from './Casino';
import { Dado } from './JuegoDeDados';
import { Ruleta } from './Ruleta';
import { TresEnLinea } from './TresEnLinea';

var readlineSync = require('readline-sync');

// añadir archivo de texto de bienvenida
var fs = require('fs'); 
const archivoBienvenida = 'saludoDeBienvenida.txt';
const contenidoBienvenida = 'Bienvenido A Casino las Vegas o Royal u Oasis, "disfrute de nuestros juegos"\n**advertencia**\n“el juego de azar en exceso es nocivo para la salud”'
console.log('                               ')
fs.writeFileSync(archivoBienvenida, contenidoBienvenida);
console.log('**** este es el saludo de bienvenida ****')
const saludoDeBienvenida = contenidoBienvenida;
console.log(saludoDeBienvenida);
console.log('-------------------------------')
console.log('                               ')



let juegoDeDados1:Dado = new Dado("juego de dados",1,0.5);
let juegoDeRuleta1:Ruleta= new Ruleta("Ruleta",1,12);
let fruits:TresEnLinea= new TresEnLinea("Tres en linea",10,2);
let juegos = new Array<string>
juegos = [juegoDeDados1.obtenerNombre(),juegoDeRuleta1.obtenerNombre(),fruits.obtenerNombre()]; // array de prueba
let oasis:Casino = new Casino("Oasis");

oasis.agregarJuegos(juegoDeDados1);
oasis.agregarJuegos(juegoDeRuleta1);
oasis.agregarJuegos(fruits);


// readline para elegir opciones de un arreglo y elegir el juego

let index:number = readlineSync.keyInSelect(juegos, 'Elija algunos de estos Juegos: "coloque el numero del juego deseado"');

switch (index) {
    case 0:
      var userName = readlineSync.question('¿Como te llamas? ');
      console.log('Bienvenido ' + userName + '!');
      console.log('Comencemos a jugar al ' + juegoDeDados1.obtenerNombre());
      var apuesta:number = readlineSync.question('cuanto quiere apostar? ');
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
        console.log( 'Salir; gracias vuelva pontro');
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

  

