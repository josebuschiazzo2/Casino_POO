"use strict";
exports.__esModule = true;
var Casino_1 = require("./Casino");
var CincoEnLinea_1 = require("./CincoEnLinea");
var JuegoDeDados_1 = require("./JuegoDeDados");
var Ruleta_1 = require("./Ruleta");
var TresEnLinea_1 = require("./TresEnLinea");
// logo casino Royal
console.log('                               ');
console.log('                               ');
var art = require('ascii-art');
var figlet = require('figlet');
figlet("CASINO ROYAL", function (err, result) {
    console.log(err || result);
});
var readlineSync = require('readline-sync');
// añadir archivo de texto de bienvenida
var fs = require('fs');
var archivoBienvenida = 'saludoDeBienvenida.txt';
var contenidoBienvenida = 'Bienvenido A Casino Royal, "disfrute de nuestros juegos"\n\n       **advertencia**\n\n“el juego de azar en exceso es nocivo para la salud”';
console.log('                               ');
fs.writeFileSync(archivoBienvenida, contenidoBienvenida);
//('**** este es el saludo de bienvenida ****')
var saludoDeBienvenida = contenidoBienvenida;
//('**** reglas de juego de dados ****')
var txt_dados = 'dados.txt';
var reglas_dados = '** REGLAS DE JUEGO DE DADOS "CRAPS" **\nEl juego de Craps se juega con dos dados.\nSe lanzarán dos dados en cada partida.\nGana si la suma de los dados es 7 u 11 y pierde si la suma es igual a 2, 3 ó 12 **CRAPS**\nCualquier otra suma de los dados Le conseguirá otro lanzamiento al jugador.\nEl jugador debe seguir lanzando.\nhasta que se llegue a una decisión (gana o pierde).\nLas apuestas a esta opción no se pueden modificar hasta concluir la jugada.';
fs.writeFileSync(txt_dados, reglas_dados);
var reglaJuegoDados = reglas_dados;
console.log('                               ');
var juegoDeDados1 = new JuegoDeDados_1.Dado("juego de dados", 1, 0.5);
var juegoDeRuleta1 = new Ruleta_1.Ruleta("Ruleta", 1, 12);
var fruits = new TresEnLinea_1.TresEnLinea("Tres en linea", 10, 3);
var cinco = new CincoEnLinea_1.CincoEnLinea("Cinco en linea", 10, 1);
var juegos = new Array;
juegos = [juegoDeDados1.obtenerNombre(), juegoDeRuleta1.obtenerNombre(), fruits.obtenerNombre(), cinco.obtenerNombre()]; // array de juegos
var royal = new Casino_1.Casino("royal");
royal.agregarJuegos(juegoDeDados1);
royal.agregarJuegos(juegoDeRuleta1);
royal.agregarJuegos(fruits);
royal.agregarJuegos(cinco);
console.log(royal.toString());
var bucle = true;
while (bucle) {
    console.clear();
    console.log('                               ');
    console.log(art.style('     *** CASINO ROYAL ***', 'red'));
    console.log(art.style(' ', 'white'));
    console.log(saludoDeBienvenida);
    console.log('                               ');
    console.log('                               ');
    console.log('Por favor selecciones uno de los juegos de la lista');
    // readline para elegir opciones de un arreglo y elegir el juego
    var index = readlineSync.keyInSelect(juegos, 'a continuacion coloque el numero del juego deseado');
    switch (index) {
        case 0:
            console.log('Bienvenido al ' + juegoDeDados1.obtenerNombre());
            console.log('                               ');
            var userName = readlineSync.question('Como te llamas? ');
            console.log('                               ');
            console.log('Bienvenido ' + userName + ' !');
            console.log('                               ');
            console.log('Comencemos a jugar al ' + juegoDeDados1.obtenerNombre());
            console.log(art.style(' ', 'green'));
            console.log(reglaJuegoDados);
            console.log(art.style(' ', 'white'));
            /// funcion apostar
            juegoDeDados1.setApuesta(juegoDeDados1.apostar());
            var lanzar = readlineSync.keyInYN('Quiere lanzar los dados?');
            if (lanzar) {
                var lanzamiento = juegoDeDados1.lanzarDados();
                console.log();
                if (lanzamiento === 2 || lanzamiento === 3 || lanzamiento === 9 || lanzamiento === 12 || lanzamiento === 7 || lanzamiento === 11) {
                    var seguir = "y";
                    while (seguir) {
                        seguir = readlineSync.keyInYN('Desea continuar jugando?   responder Y o N : ');
                        if (seguir) {
                            juegoDeDados1.setApuesta(juegoDeDados1.apostar());
                            juegoDeDados1.lanzarDados();
                        }
                        else {
                            break;
                        }
                    }
                }
            }
            break;
        case 1:
            var userName = readlineSync.question('Como te llamas? ');
            console.log('Bienvenido ' + userName + ' !');
            console.log('Comencemos a jugar al ' + juegoDeRuleta1.obtenerNombre());
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
                var apuesta = readlineSync.question('Cuanto quiere apostar? ');
                while (apuesta <= 0 || isNaN(apuesta)) {
                    console.log(art.style(' ', 'red'));
                    console.log("apuesta Incorrecta. ingrese un numero mayor a 0");
                    console.log(art.style(' ', 'white'));
                    var apuesta = readlineSync.question('cuanto quiere apostar? ');
                }
                juegoDeRuleta1.setApuesta(apuesta);
                var juego = readlineSync.question('Que juego quiere ejecutar?');
                juegoDeRuleta1.setGameName(juego);
                switch (juego) {
                    case "color":
                    case "Color":
                        var nro = readlineSync.question('Que Color desea? (Negro -> 0 y Rojo -> 1):');
                        juegoDeRuleta1.setNumber(nro);
                        break;
                    case "parimpar":
                    case "ParImpar":
                        var nro = readlineSync.question('Que desea? (Impar -> 0 y Par -> 1):');
                        juegoDeRuleta1.setNumber(nro);
                        break;
                    case "columna":
                    case "Columna":
                        var nro = readlineSync.question('Que Columna desea? (1, 2 o 3):');
                        juegoDeRuleta1.setNumber(nro);
                        break;
                    case "docena":
                    case "Docena":
                        var nro = readlineSync.question('Que Docena desea? (1, 2 o 3):');
                        juegoDeRuleta1.setNumber(nro);
                        break;
                    case "cuadro":
                    case "Cuadro":
                        var nro = readlineSync.question('Que Cuadro desea? (del 1 al 24):');
                        juegoDeRuleta1.setNumber(nro);
                        break;
                    case "pleno":
                    case "Pleno":
                        var nro = readlineSync.question('Que numero desea? (del 0 al 36):');
                        juegoDeRuleta1.setNumber(nro);
                        break;
                    default:
                        console.log('Por default entro en Pleno..');
                        var nro = readlineSync.question('Que numero desea? (del 0 al 36):');
                        juegoDeRuleta1.setNumber(nro);
                        break;
                }
                console.log(art.style(' ', 'red'));
                juegoDeRuleta1.lanzarRuleta();
                console.log('Su premio es $', juegoDeRuleta1.getPremio());
                console.log(art.style(' ', 'white'));
            }
            break;
        case 2:
            var userName = readlineSync.question('Como te llamas? ');
            console.log('Bienvenido ' + userName + ' !');
            console.log('Comencemos a jugar al ' + fruits.obtenerNombre());
            var apuesta = readlineSync.question('cuanto quiere apostar? ');
            while (apuesta <= 0 || isNaN(apuesta)) {
                console.log(art.style(' ', 'red'));
                console.log("apuesta Incorrecta. ingrese un numero mayor a 0");
                console.log(art.style(' ', 'white'));
                var apuesta = readlineSync.question('cuanto quiere apostar? ');
            }
            fruits.setApuesta(apuesta);
            while (readlineSync.keyInYN('Quiere girar los rodillos?')) {
                console.log(art.style(' ', 'blue'));
                fruits.girar();
                console.log(art.style(' ', 'white'));
                var premio = fruits.getPremio();
                console.log("su premio es \n", premio);
                ////  segui con la condicion de pedir apuesta /// hacer funcion de apostar
                while (premio = 0) {
                }
                console.log("pozo acumulado\n ", fruits.obtenerPozo());
            }
            break;
        case 3:
            var userName = readlineSync.question('Como te llamas? ');
            console.log('Bienvenido ' + userName + ' !');
            console.log('Comencemos a jugar al ' + cinco.obtenerNombre());
            var apuesta = readlineSync.question('cuanto quiere apostar? ');
            while (apuesta <= 0 || isNaN(apuesta)) {
                console.log(art.style(' ', 'red'));
                console.log("apuesta Incorrecta. ingrese un numero mayor a 0");
                console.log(art.style(' ', 'white'));
                var apuesta = readlineSync.question('cuanto quiere apostar? ');
            }
            cinco.setApuesta(apuesta);
            while (readlineSync.keyInYN('Quiere girar los rodillos?')) {
                console.log(art.style(' ', 'blue'));
                cinco.girar();
                console.log(art.style(' ', 'white'));
                var premio = cinco.getPremio();
                console.log("su premio es \n", premio);
                ////  segui con la condicion de pedir apuesta /// hacer funcion de apostar
                while (premio = 0) {
                }
                console.log("pozo acumulado\n ", cinco.obtenerPozo());
            }
            break;
        default:
            console.log('                               ');
            console.log('                               ');
            console.log('ha seleccionado CANCEL, usted ha salido del casino, gracias por visitarnos vuelva pronto');
            bucle = false;
            break;
    }
}
