import { Tragamoneda } from "./Tragamoneda";

export class Casino {
    private nombre: string;
    private juegos = new Array<Tragamoneda>

    constructor(nombre:string){
        this.nombre = nombre;
    }

    agregarJuegos(juego:Tragamoneda):void{
        this.juegos.push(juego);
    }

    eliminarJuego(juego:Tragamoneda):void{
        for (let index:number = 0; index < this.juegos.length; index++) {
            if (juego.obtenerNombre() === this.juegos[index].obtenerNombre()) {
                this.juegos.splice(index,1)  
            }   
        }
    }

    obtenerNombre():string{
        return this.nombre;
    }

    modificarNombre(nuevoNombre:string){
        this.nombre = nuevoNombre;
    }

    
}