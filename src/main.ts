import { Dado } from './JuegoDeDados';
import { Ruleta } from './Ruleta';

let juegoDeDados1:Dado = new Dado("juego de dados",1,0.5);
let juegoDeRuleta1:Ruleta= new Ruleta("Pleno",1,12);

console.log(juegoDeDados1.lanzarDados());
console.log(juegoDeRuleta1.lanzarRuleta());


