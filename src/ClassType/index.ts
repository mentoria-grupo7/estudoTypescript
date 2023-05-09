export class Empresa {
	// atributo do tipo public e é somente leitura
	public readonly nome: string;

  // atributo do tipo privado e somente leitura
	private readonly cnpj: string;

	constructor(nome: string ) {
			this.nome = nome;
  }
}

const empresa1 = new Empresa('Empresa 1');
console.log(empresa1.nome) // irá printar Empresa 1
//console.log(empresa1.cnpj) // dará erro pois a variavel é privada.