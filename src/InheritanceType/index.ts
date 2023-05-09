export class Pessoa {

    constructor(public nome: string, 
                          public sobrenome: string,
                              private idade: number,
                              protected cpf: string) { }
    
    getIdade(): number{
       return this.idade;
    }
  
    getCpf(): string{
        return this.cpf;
    }
  
    getNomeCompleto(): string {
      return this.nome + ' ' + this.sobrenome
    }
  }

  export class Aluno extends Pessoa {
    getNomeCompleto(): string {
      return 'Outro texto: ' + this.nome + ' ' + this.sobrenome
    }
  }

  const aluno = new Aluno('Raul', 'Theotonio', 31, '000.000.000-00')
  console.log(aluno)
  console.log(aluno.getNomeCompleto())