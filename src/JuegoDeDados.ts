import { Tragamoneda } from './Tragamoneda';

/* El juego de Craps se juega con dos dados. Se lanzarán dos dados en cada partida.
Gana si la suma de los dados es 7 u 11 y pierde si la suma es igual a 2, 3 ó 12 **CRAPS**. 
Cualquier otra suma de los dados Le conseguirá otro lanzamiento al jugador. El jugador debe seguir lanzando
hasta que se llegue a una decisión (gana o pierde). 
Las apuestas a esta opción no se pueden modificar hasta concluir la jugada.
*/

export class Dado extends Tragamoneda {
	premio: number; //implements Maquina
	
	
	constructor(nombre: string,apuesta: number,probabilidad: number){
		super(nombre,apuesta,probabilidad);
				
		}

	lanzarDados() { //min: number, max: number
		const max = 6;
		const min = 1;
		let dado1:number;
		let dado2:number;
		let resultado: number;
		
		dado1 = Math.floor(Math.random() * (max - min + 1) + min);
		dado2 = Math.floor(Math.random() * (max - min + 1) + min);

		console.log("Lanzamiento de los dados") 

		console.log("dado 1 = ",dado1)
		console.log("dado 2 = ",dado2)
		
		resultado = dado1 + dado2;
	
		switch (resultado) {
			case  7:
			case  11:	
				
				console.log("ha salido ",resultado," Felicitaciones usted ha ganado $$",this.apuesta * 2) // falta mostra el premio
				break;

			case 4:
			case 5:
			case 6:
			case 8:
			case 10:					
				console.log("ha salido ",resultado, "No ha ganado ningun premio pero usted puede lanzar nuevamente") 

				break;
						
			default:
				console.log("ha salido ",resultado, "**CRAPS** usted ah perdido") 
				break;
		}

		return resultado;
		}

	getPremio(): number {
		return this.premio;
	}
	
	/*obtenerApuesta(apuesta: number): void {
		this.apuesta = apuesta;
	}*/
	

   
} // fin clase Dado









