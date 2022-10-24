//  clase padre

export abstract class Tragamoneda {
    protected nombre: string;
    protected apuesta: number;
    protected probabilidad: number;

    constructor(nombre: string,apuesta: number,probabilidad: number){
        this.nombre = nombre;
        this.apuesta = apuesta;
        this.probabilidad = probabilidad;
    }
    
    obtenerApuesta(){
        return this.apuesta;
    }
    
    modificarApuesta(apuesta:number){
        this.apuesta = apuesta;
    }

    obtenetProbabilidad(){
        return this.probabilidad;
    }

    abstract apostar():void;

}