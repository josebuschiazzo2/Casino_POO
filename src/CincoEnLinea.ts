import { Maquina } from './Maquina';
import { Tragamoneda } from './Tragamoneda';

export class CincoEnLinea extends Tragamoneda implements Maquina{
	
	private rodillo1 = new Array<string>
	private rodillo2 = new Array<string>
	private rodillo3 = new Array<string>
	private rodillo4 = new Array<string>
	private rodillo5 = new Array<string>
	private numMin : number;
	private numMax: number;
	private pozo:number;
	private posicionFinalRodillos:number;

	constructor(nombre: string,apuesta: number,probabilidad: number){
		super(nombre,apuesta,probabilidad);
		this.rodillo1 = ["MONEDA","DIAMANTE","TREBOL","PICAS","CORAZON","WILD"];
		this.rodillo2 = ["MONEDA","DIAMANTE","TREBOL","PICAS","CORAZON","WILD"];
		this.rodillo3 = ["MONEDA","DIAMANTE","TREBOL","PICAS","CORAZON","WILD"];
		this.rodillo4 = ["MONEDA","DIAMANTE","TREBOL","PICAS","CORAZON","WILD"];
		this.rodillo5 = ["MONEDA","DIAMANTE","TREBOL","PICAS","CORAZON","WILD"];
		this.numMax = 5;
		this.pozo = 10000;
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
				this.pozo = 3000;
				break;


			case 2:
				premio = this.apuesta*2.5;
				this.pozo = Number(this.apuesta) + this.pozo;
				break;

			default:
				premio = 0;
				this.pozo = this.pozo + Number(this.apuesta)*5;
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
		let rodillo4 =this.rodillo4[this.posicionRodillo()];
		let rodillo5 =this.rodillo5[this.posicionRodillo()];
		
		if(rodillo1 === rodillo2 && rodillo1 === rodillo3 && rodillo3 === rodillo4 && rodillo4 === rodillo5){
			this.posicionFinalRodillos = 1;
		}else if (rodillo1 === rodillo2 || rodillo2 === rodillo3 || rodillo3 === rodillo4 || rodillo4 === rodillo5){
			this.posicionFinalRodillos = 2;
		}else{
			this.posicionFinalRodillos = 0;
		}
		console.log(rodillo1 + " " + rodillo2 + " " + rodillo3 + " " + rodillo4 + " " + rodillo5);
	}

	obtenerPozo():number{
		return this.pozo;
	}


	
} 
