import { Maquina } from './Maquina';
import { Tragamoneda } from './Tragamoneda';

export class TresEnLinea extends Tragamoneda implements Maquina{
	
	private rodillo1 = new Array<string>
	private rodillo2 = new Array<string>
	private rodillo3 = new Array<string>
	private numMin : number;
	private numMax: number;
	private pozo:number;
	private posicionFinalRodillos:number;

	constructor(nombre: string,apuesta: number,probabilidad: number){
		super(nombre,apuesta,probabilidad);
		this.rodillo1 = ["Manzana","Pera","Limon","Wild","Siete","Cereza"];
		this.rodillo2 = ["Manzana","Pera","Limon","Wild","Siete","Cereza"];
		this.rodillo3 = ["Manzana","Pera","Limon","Wild","Siete","Cereza"];
		this.numMax = 5;
		this.pozo = 3000;
		if (probabilidad === 1){
			this.numMin = 0;
		} else if (probabilidad === 2){
			this.numMin = 1;
		}else if (probabilidad === 3){
			this.numMin = 3;
		}

		
	}
	setApuesta(cantidad: number): void {
		this.apuesta = cantidad;
	}
	getPremio(): number {
		
		let premio:number;
		switch (this.posicionFinalRodillos) {
			case 1:
				premio = this.pozo;
				this.pozo = this.pozo;
				break;


			case 2:
				premio = this.apuesta*1.5;
				this.pozo = Number(this.apuesta) + this.pozo;
				break;

			default:
				premio = 0;
				this.pozo = this.pozo + Number(this.apuesta)*2;
				break;
		}
		
		return premio;
	}

	apostar(): void {
		throw new Error('Method not implemented.');
	}

	private posicionRodillo():number{
		let posRodillo:number =  Math.floor(Math.random() * (this.numMax - this.numMin + 1) + this.numMin);
		return posRodillo;
	}

	public girar(){
		let rodillo1 =this.rodillo1[this.posicionRodillo()];
		let rodillo2 =this.rodillo2[this.posicionRodillo()];
		let rodillo3 =this.rodillo3[this.posicionRodillo()];
		
		if(rodillo1 === rodillo2 && rodillo1 === rodillo3){
			this.posicionFinalRodillos = 1;
		}else if (rodillo1 === rodillo2 && rodillo1 != rodillo3 || rodillo2 === rodillo3 && rodillo2 != rodillo1 || rodillo3 === rodillo1 && rodillo3 != rodillo2){
			this.posicionFinalRodillos = 2;
		}else{
			this.posicionFinalRodillos = 0;
		}
		console.log(rodillo1 + " " + rodillo2 + " " + rodillo3);
	}

	obtenerPozo():number{
		return this.pozo;
	}


	
} 
