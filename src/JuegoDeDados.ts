import { Tragamoneda } from './Tragamoneda';

var readlineSync = require('readline-sync');
const art = require('ascii-art')


export class Dado extends Tragamoneda {
	
	private winner: number;	

	constructor(nombre: string,apuesta: number,probabilidad: number){
		super(nombre,apuesta,probabilidad)
		this.winner = 0;
				
		}

		
	
	public apostar(): number {
		var apuesta:number = readlineSync.question('cuanto quiere apostar? ');
      while(apuesta <= 0 || isNaN(apuesta)){ 
        console.log(art.style(' ', 'red'));  
        console.log("apuesta Incorrecta. ingrese un numero mayor a 0");
        console.log(art.style(' ', 'white'));
        var apuesta:number = readlineSync.question('cuanto quiere apostar? ');
        
      };
	  return apuesta;
	}
		
	public getPremio(): number {
		return this.apuesta * this.winner;
	}
		
	public setApuesta(apuesta: number): void {
		this.apuesta = apuesta;
	}
	
	

	public lanzarDados() {
		const max = 6;
		const min = 1;
		let dado1:number;
		let dado2:number;
		let resultado: number;
		
		
		dado1 = Math.floor(Math.random() * (max - min + 1) + min);
		dado2 = Math.floor(Math.random() * (max - min + 1) + min);

		console.log("Lanzamiento de dados") 

		console.log("dado 1 = ",dado1)
		console.log("dado 2 = ",dado2)
		
		resultado = dado1 + dado2;
	
		switch (resultado) {
			case  7:
				this.winner = 5;
				console.log("ha salido ",resultado," Felicitaciones usted ha ganado $$",this.apuesta * this.winner);
				break;

			case  11:
				this.winner = 15;	
				console.log("ha salido ",resultado," Felicitaciones usted ha ganado $$",this.apuesta * this.winner);
				break;

			case 4:
			case 5:
			case 6:
			case 8:
			case 10:					
				console.log("ha salido ",resultado, "No ha ganado ningun premio pero usted puede lanzar nuevamente");
				console.log("........");
						
				break;
						
			default:
				console.log("ha salido ",resultado, "**CRAPS** usted ah perdido");
				break;
		}

		return resultado;
		}
   
} // fin clase Dado









