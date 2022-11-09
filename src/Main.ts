import { Casino } from './Casino';
import { CincoEnLinea } from './CincoEnLinea';
import { Dado } from './JuegoDeDados';
import { Ruleta } from './Ruleta';
import { TresEnLinea } from './TresEnLinea';

// logo casino Royal
console.log('                               ')
console.log('                               ')
const art = require('ascii-art')


const figlet = require('figlet')

figlet("CASINO ROYAL", (err, result) => {
    console.log(err || result)
  } );

var readlineSync = require('readline-sync');

// añadir archivo de texto de bienvenida
var fs = require('fs'); 
const archivoBienvenida = 'saludoDeBienvenida.txt';
const contenidoBienvenida = 'Bienvenido A Casino Royal, "disfrute de nuestros juegos"\n\n       **advertencia**\n\n“el juego de azar en exceso es nocivo para la salud”';
console.log('                               ');

fs.writeFileSync(archivoBienvenida, contenidoBienvenida);

//('**** este es el saludo de bienvenida ****')
const saludoDeBienvenida = contenidoBienvenida;
//('**** reglas de juego de dados ****')
const txt_dados = 'dados.txt';
const reglas_dados = '** REGLAS DE JUEGO DE DADOS "CRAPS" **\nEl juego de Craps se juega con dos dados.\nSe lanzarán dos dados en cada partida.\nGana si la suma de los dados es 7 u 11 y pierde si la suma es igual a 2, 3 ó 12 **CRAPS**\nCualquier otra suma de los dados Le conseguirá otro lanzamiento al jugador.\nEl jugador debe seguir lanzando.\nhasta que se llegue a una decisión (gana o pierde).\nLas apuestas a esta opción no se pueden modificar hasta concluir la jugada.'
fs.writeFileSync(txt_dados, reglas_dados);
const reglaJuegoDados = reglas_dados;
console.log('                               ')

const txt_ruleta = 'ruleta.txt';
const reglas_ruleta = '** REGLAS DE JUEGO DE RULETA **\nEl juego de ruleta se juega con una bola y un disco de ruleta, del 0 al 36.\nCada nùmero tiene un color, atributo Par o Impar y pertenece a una columna, docena y cuadrante.\nSe lanzará la bola al disco de ruleta dados en cada partida.\nSe Gana si acierta en el juego elegido y el resultado del mismo.\nLas apuestas a esta opción no se pueden modificar hasta concluir la jugada.'
fs.writeFileSync(txt_ruleta, reglas_ruleta);
const reglaJuegoRuleta = reglas_ruleta;
console.log('                               ');

//'**** reglas del tres en linea ****')
const txt_Tres_en_linea = 'tresEnLinea.txt';
const reglas_Tres_en_linea = '** REGLAS DEL JUEGO TRES EN LINEA **\n\nRealice una apuesta .\nGire los rodillos.\nSi dos rodillos son iguales usted gana el valor de su apuesta mas la mitad.\nSi los tres rodillos son iguales usted gana el pozo acumulado.';
fs.writeFileSync(txt_Tres_en_linea, reglas_Tres_en_linea);
const reglaJuegoTresEnLinea = reglas_Tres_en_linea;
console.log('                               ');

//'**** reglas del cinco en linea ****')
const txt_Cinco_en_linea = 'cincoEnLinea.txt';
const reglas_Cinco_en_linea = '** REGLAS DEL JUEGO CINCO EN LINEA **\n\nRealice una apuesta .\nGire los rodillos.\nSi dos rodillos consecutivos son iguales usted gana el valor de su apuesta mas la mitad.\nSi los cinco rodillos son iguales usted gana el pozo acumulado.';
fs.writeFileSync(txt_Cinco_en_linea, reglas_Cinco_en_linea);
const reglaJuegoCincoEnLinea = reglas_Cinco_en_linea;
console.log('                               ');


let juegoDeDados1:Dado = new Dado("juego de dados",1,0.5);
let juegoDeRuleta1:Ruleta= new Ruleta("Ruleta",1,12);
let fruits:TresEnLinea= new TresEnLinea("Tres en linea",10,3);
let cinco: CincoEnLinea= new CincoEnLinea("Cinco en linea",10,1);
let juegos = new Array<string>
juegos = [juegoDeDados1.obtenerNombre(),juegoDeRuleta1.obtenerNombre(),fruits.obtenerNombre(),cinco.obtenerNombre()]; // array de juegos

let royal:Casino = new Casino("royal");
royal.agregarJuegos(juegoDeDados1);
royal.agregarJuegos(juegoDeRuleta1);
royal.agregarJuegos(fruits);
royal.agregarJuegos(cinco);
console.log(royal.toString());

let bucle:boolean=true;
while(bucle){
  console.clear();
  console.log('                               ');
  console.log(art.style('     *** CASINO ROYAL ***', 'red'));
  console.log(art.style(' ', 'white'));
  console.log(saludoDeBienvenida);
console.log('                               ');
console.log('                               ');
console.log('Por favor selecciones uno de los juegos de la lista');

// readline para elegir opciones de un arreglo y elegir el juego

let index:number = readlineSync.keyInSelect(juegos, 'a continuacion coloque el numero del juego deseado');

switch (index) {
    case 0:
      console.log('Bienvenido al ' + juegoDeDados1.obtenerNombre());
      console.log('                               ')
      var userName = readlineSync.question('Como te llamas? ');
      royal.escribirArchivo("log.txt", "Nombre: " + userName);
      console.log('                               ')
      console.log('Bienvenido ' + userName + ' !');
      console.log('                               ')
      console.log('Comencemos a jugar al ' + juegoDeDados1.obtenerNombre());
      console.log(art.style(' ', 'green'));
      console.log(reglaJuegoDados);
      console.log(art.style(' ', 'white'));
      /// funcion apostar
      juegoDeDados1.setApuesta(juegoDeDados1.apostar());
      royal.escribirArchivo("log.txt","Apuesta: " + String(juegoDeDados1.obtenerApuesta()));
      var lanzar:string = readlineSync.keyInYN('Quiere lanzar los dados?')
       if(lanzar) {
        let lanzamiento:number = juegoDeDados1.lanzarDados();
        console.log(); 
 
         if (lanzamiento === 2 || lanzamiento === 3 || lanzamiento === 9 || lanzamiento === 12 || lanzamiento === 7 || lanzamiento === 11 ){
          let seguir:string = "y";
          royal.escribirArchivo("log.txt", "Apuesta: " + String("Lanzamiento: " + lanzamiento));
          while(seguir) {
            seguir = readlineSync.keyInYN('Desea continuar jugando?   responder Y o N : ')
          
            if(seguir){
              juegoDeDados1.setApuesta(juegoDeDados1.apostar());
              royal.escribirArchivo("log.txt", "Apuesta: " + String(juegoDeDados1.obtenerApuesta()));
              juegoDeDados1.lanzarDados();
            } else {
              break;
            }
          } 
      }
     
      royal.escribirArchivo("log.txt", "Premio: " + String(juegoDeDados1.getPremio()));
    }
       break;

    case 1:
      var userName = readlineSync.question('Como te llamas? ');
      console.log('Bienvenido ' + userName + ' !');
      console.log('Comencemos a jugar al ' + juegoDeRuleta1.obtenerNombre());
      royal.escribirArchivo("log.txt", "Nombre: " + userName);
      console.log(art.style(' ', 'green'));
      console.log(reglaJuegoRuleta);
      console.log(art.style(' ', 'white'));
      console.log(art.style('Usted puede optar por 6 tipos de Apuestas:', 'yellow'));
      console.log('1- Elegir un Color (Rojo o Negro) // Paga la Apuesta x2');
      console.log('2- ParImpar // Paga la Apuesta x2');
      console.log('3- Columna (1, 2 o 3) // Paga la Apuesta x3');
      console.log('4- Docena (1, 2 o 3) // Paga la Apuesta x3');
      console.log('5- Cuadro (del 1 al 24) // Paga la Apuesta x9');
      console.log('6- Pleno (del 0 al 36) // Paga la Apuesta x36');
      console.log(art.style(' ', 'white'));
      
      while (readlineSync.keyInYN('Quiere Jugar?')) {
      // 'Y' key was pressed.

      var apuesta:number = readlineSync.question('Cuanto quiere apostar? ');
      royal.escribirArchivo("log.txt","Apuesta: " + String(apuesta));
      while(apuesta <= 0 || isNaN(apuesta)){
        console.log(art.style(' ', 'red'));  
        console.log("apuesta Incorrecta. ingrese un numero mayor a 0");
        console.log(art.style(' ', 'white'));
        var apuesta:number = readlineSync.question('cuanto quiere apostar? ');
        
      }

      juegoDeRuleta1.setApuesta(apuesta);
      var juego:string = readlineSync.question('Que juego quiere ejecutar?');
      royal.escribirArchivo("log.txt","Juego de ruleta: " + juego);
      juegoDeRuleta1.setGameName(juego);
      var nro:number;
      switch(juego){
          case "color": 
          case "Color":
           nro = readlineSync.question('Que Color desea? (Negro -> 0 y Rojo -> 1):');
          juegoDeRuleta1.setNumber(nro);
          break;

          case "parimpar": 
          case "ParImpar":
          nro = readlineSync.question('Que desea? (Impar -> 0 y Par -> 1):');
          juegoDeRuleta1.setNumber(nro);
          break;

          case "columna": 
          case "Columna":
          nro = readlineSync.question('Que Columna desea? (1, 2 o 3):');
          juegoDeRuleta1.setNumber(nro);
          break;

          case "docena": 
          case "Docena":
          nro = readlineSync.question('Que Docena desea? (1, 2 o 3):');
          juegoDeRuleta1.setNumber(nro);
          break;

          case "cuadro": 
          case "Cuadro":
          nro= readlineSync.question('Que Cuadro desea? (del 1 al 24):');
          juegoDeRuleta1.setNumber(nro);
          break;

          case "pleno": 
          case "Pleno":
          nro= readlineSync.question('Que numero desea? (del 0 al 36):');
          juegoDeRuleta1.setNumber(nro);
          break;
          
          default:
          console.log('Por default entro en Pleno..');
          nro= readlineSync.question('Que numero desea? (del 0 al 36):');
          juegoDeRuleta1.setNumber(nro);
          break;
      }
      royal.escribirArchivo("log.txt","Jugada: " + String(nro));
      console.log(art.style(' ', 'red'));
      juegoDeRuleta1.lanzarRuleta();
      console.log('Su premio es $',juegoDeRuleta1.getPremio());
      royal.escribirArchivo("log.txt","Premio: " + String(juegoDeRuleta1.getPremio()));
      console.log(art.style(' ', 'white'));
    }

      break;

    case 2:
      var userName = readlineSync.question('Como te llamas? ');
      console.log('Bienvenido ' + userName + ' !');
      console.log('Comencemos a jugar al ' + fruits.obtenerNombre());
      royal.escribirArchivo("log.txt", "Nombre: " + userName);
      console.log(art.style(' ', 'yellow'));
      console.log(reglaJuegoTresEnLinea);
      console.log(art.style(' ', 'white'));
      
      fruits.setApuesta(fruits.apostar());
      royal.escribirArchivo("log.txt", "Apuesta: " + String(fruits.obtenerApuesta()));

      while (readlineSync.keyInYN('Quiere girar los rodillos?')) {
        console.log(art.style(' ', 'blue'));
        fruits.girar();
        console.log(art.style(' ', 'white'));
        var premio = fruits.getPremio();
        royal.escribirArchivo("log.txt", "Premio: " + String(premio));
        console.log("su premio es \n", premio);
        console.log("pozo acumulado\n ",fruits.obtenerPozo())
      }
     
        break;

        case 3:
          
          var userName = readlineSync.question('Como te llamas? ');
          console.log('Bienvenido ' + userName + ' !');
          console.log('Comencemos a jugar al ' + cinco.obtenerNombre());
          royal.escribirArchivo("log.txt", "Nombre: " + userName);
          console.log(art.style(' ', 'yellow'));
          console.log(reglaJuegoCincoEnLinea);
          console.log(art.style(' ', 'white'));

          var apuesta:number = readlineSync.question('cuanto quiere apostar? ');
            royal.escribirArchivo("log.txt", "Apuesta: " + String(apuesta));
            while(apuesta <= 0 || isNaN(apuesta)){
            console.log(art.style(' ', 'red'));  
            console.log("apuesta Incorrecta. ingrese un numero mayor a 0");
            console.log(art.style(' ', 'white'));
            var apuesta:number = readlineSync.question('cuanto quiere apostar? ');
            
          } cinco.setApuesta(apuesta);
    
          while (readlineSync.keyInYN('Quiere girar los rodillos?')) {
            console.log(art.style(' ', 'blue'));
            cinco.girar();
            console.log(art.style(' ', 'white'));
            var premio = cinco.getPremio();
            royal.escribirArchivo("log.txt", "Premio: " + String(premio));
            console.log("su premio es \n", premio);
            console.log("pozo acumulado\n ",cinco.obtenerPozo())
          }
         
            break;        


    default:
      
      console.log('                               ')
      console.log('                               ')
        console.log( 'ha seleccionado CANCEL, usted ha salido del casino, gracias por visitarnos vuelva pronto');
        bucle = false;
        break;
}

}


