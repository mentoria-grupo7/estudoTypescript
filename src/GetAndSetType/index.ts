export class Pessoa {

    constructor(private nome: string,
                private cpf: string) { }
    
    getNome(): string{
       return this.nome;
    }
      
    setNome(nome: string) {
          this.nome = nome;
    }
      
    getCpf(): string{
        return this.cpf;
    }
  
    setCpf(cpf: string) {
     this.cpf = cpf
    }
  }
  
  const pessoa = new Pessoa('Pedro', '000.000.000-00')
  console.log(pessoa.getNome())
  console.log(pessoa.getCpf())
  pessoa.setNome('Joao')
  pessoa.setCpf('111.111.111-11')
  console.log(pessoa.getNome())
  console.log(pessoa.getCpf())