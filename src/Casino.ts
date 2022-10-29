import { Ruleta } from "./Ruleta";
import { Tragamoneda } from "./Tragamoneda";
import { TresEnLinea } from "./TresEnLinea";

export class Casino {
    private nombre: string;
    private juegos = new Array<Tragamoneda>

    constructor(nombre:string){
        this.nombre = nombre;
        this.juegos = [juego .Ruleta,TresEnLinea]
    }
}