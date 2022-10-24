import { Maquina } from './Maquina';
import { Tragamoneda } from './Tragamoneda';

export class Dado extends Tragamoneda implements Maquina{
	

	constructor(nombre: string,apuesta: number,probabilidad: number){
		super(nombre,apuesta,probabilidad);
		this.nombre = nombre;
        this.apuesta = apuesta;
        this.probabilidad = probabilidad;
		
	}

	setApuesta(number: any): void {
		throw new Error("Method not implemented.");
	}
	getPremio(): number {
		throw new Error("Method not implemented.");
	}

	lanzarDados() { //min: number, max: number
		const max = 6;
		const min = 1;
		let dado1:number;
		let dado2:number;
		let resultado: number;
		let premio: number;
		
		
		dado1 = Math.floor(Math.random() * (max - min + 1) + min);
		dado2 = Math.floor(Math.random() * (max - min + 1) + min);

		console.log("primer lanzamiento") 

		console.log("dado 1 = ",dado1)
		console.log("dado 2 = ",dado2)
		
		resultado = dado1 + dado2;
		console.log("La suma de los dados es : ", resultado)


		switch (resultado) {
			case  7:
				console.log("Felicitaciones usted ha ganado $$$$$$ ") //, premio
				break;

			case  11:
				console.log("Felicitaciones usted ha ganado $$$$$$ ") //, premio
				break;	

			case  2:
				console.log("No ha ganado ningun premio pero usted puede lanzar nuevamente") 

				dado1 = Math.floor(Math.random() * (max - min + 1) + min);
				dado2 = Math.floor(Math.random() * (max - min + 1) + min);

				console.log("dado 1 = ",dado1)
				console.log("dado 2 = ",dado2)
				
				resultado = dado1 + dado2;

				break;
				
			case 3:
				console.log("No ha ganado ningun premio pero usted puede lanzar nuevamente") 
	
				dado1 = Math.floor(Math.random() * (max - min + 1) + min);
				dado2 = Math.floor(Math.random() * (max - min + 1) + min);
	
				console.log("dado 1 = ",dado1)
				console.log("dado 2 = ",dado2)
					
				resultado = dado1 + dado2;
	
				break;
				
			case  12:
				console.log("No ha ganado ningun premio pero usted puede lanzar nuevamente") 
	
				dado1 = Math.floor(Math.random() * (max - min + 1) + min);
				dado2 = Math.floor(Math.random() * (max - min + 1) + min);
	
				console.log("dado 1 = ",dado1)
				console.log("dado 2 = ",dado2)
					
				resultado = dado1 + dado2;
	
				break;	
		
			default:
				console.log("usted ah perdido") 
				break;
		}

		/*
			if(resultado === 7 || resultado == 11){
				//premio = this.apuesta *2;
				
				console.log("Felicitaciones usted ha ganado $$$$$$ ") //, premio

			 if(resultado = 2 || resultado == 3 || resultado = 12){ 

				dado1 = Math.floor(Math.random() * (max - min + 1) + min);
				dado2 = Math.floor(Math.random() * (max - min + 1) + min);

				console.log("No ha ganado ningun premio pero usted puede lanzar nuevamente") 
				
				console.log("nuevo lanzamiento:") // funcion para que vuelta a lanzar los dados hasta ganar o perder *** 
				
				console.log("dado 1 = ",dado1)
				console.log("dado 2 = ",dado2)
				
				resultado = dado1 + dado2;
			 }
			} else{
				
				console.log("usted ah perdido") 
			}
		*/
		return resultado;
		}
		  

    apostar() {

	throw new Error("Function not implemented.");

	}
} // fin clase Dado









