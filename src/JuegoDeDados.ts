import { Tragamoneda } from './Tragamoneda';

/* El juego de Craps se juega con dos dados. Se lanzarán dos dados en cada partida.
Gana si la suma de los dados es 7 u 11 y pierde si la suma es igual a 2, 3 ó 12 **CRAPS**. 
Cualquier otra suma de los dados Le conseguirá otro lanzamiento al jugador. El jugador debe seguir lanzando
hasta que se llegue a una decisión (gana o pierde). 
Las apuestas a esta opción no se pueden modificar hasta concluir la jugada.
*/

export class Dado extends Tragamoneda {
	

		
	constructor(nombre: string,apuesta: number,probabilidad: number){
		super(nombre,apuesta,probabilidad);
		this.winner = 0;
				
		}

	winner: number;
		
	public getPremio(): number {
		return this.apuesta * this.winner;
	}
		
	public setApuesta(apuesta: number): void {
		this.apuesta = apuesta;
	}		

	public lanzarDados() { //min: number, max: number
		const max = 6;
		const min = 1;
		let dado1:number;
		let dado2:number;
		let resultado: number;
		let winner: number;
		
		dado1 = Math.floor(Math.random() * (max - min + 1) + min);
		dado2 = Math.floor(Math.random() * (max - min + 1) + min);

		console.log("Lanzamiento de dados") 

		console.log("dado 1 = ",dado1)
		console.log("dado 2 = ",dado2)
		
		resultado = dado1 + dado2;
	
		switch (resultado) {
			case  7:
				this.winner = 5;
				console.log("ha salido ",resultado," Felicitaciones usted ha ganado $$",this.apuesta * this.winner) // winner multiplica la apuesta en getPremio
				break;

			case  11:
				this.winner = 15;	
				console.log("ha salido ",resultado," Felicitaciones usted ha ganado $$",this.apuesta * this.winner) // winner multiplica la apuesta en getPremio
				break;

			case 4:
			case 5:
			case 6:
			case 8:
			case 10:					
				console.log("ha salido ",resultado, "No ha ganado ningun premio pero usted puede lanzar nuevamente")
				console.log("*******");
				console.log("su siguiente lanzamiento es: ");
				this.lanzarDados(); 

				break;
						
			default:
				console.log("ha salido ",resultado, "**CRAPS** usted ah perdido") 
				break;
		}

		return resultado;
		}
   
} // fin clase Dado









