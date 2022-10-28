import { Maquina } from './Maquina';
import { Tragamoneda } from './Tragamoneda';

export class TresEnLinea extends Tragamoneda implements Maquina{
	
	private rodillo1 = new Array<string>
	private rodillo2 = new Array<string>
	private rodillo3 = new Array<string>

	constructor(nombre: string,apuesta: number,probabilidad: number){
		super(nombre,apuesta,probabilidad);
		this.rodillo1 = ["Manzana","Pera","Limon","Wild","Siete","Cereza"];
		this.rodillo2 = ["Manzana","Pera","Limon","Wild","Siete","Cereza"];
		this.rodillo3 = ["Manzana","Pera","Limon","Wild","Siete","Cereza"];
		
	}
	setApuesta(cantidad: number): void {
		this.apuesta = cantidad;
	}
	getPremio(premio: number): void {
		throw new Error('Method not implemented.');
	}

	apostar(): void {
		throw new Error('Method not implemented.');
	}

	private posicionRodillo():number{
		let posRodillo:number =  Math.floor(Math.random() * (5 - 0 + 1) + 0);
		return posRodillo;
	}

	Girar():string{
		return this.rodillo1[this.posicionRodillo()] + "--" + this.rodillo2[this.posicionRodillo()] + "--" + this.rodillo3[this.posicionRodillo()];
	}

	
} 
