//tipos básicos
let nome: string = 'Luiz'
let idade: number = 30
let adulto: boolean = true
let simbolo: symbol = Symbol('Qualquer-symbol')

//arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5]
let arrayDeNome: Array<string> = ['Raul', 'Pedro']
// ou
let arrayDeNumeros2: number[] = [1, 2, 3, 4, 5]
let arrayDeNome2: string[] = ['Raul', 'Pedro']


//objeto
let pessoa: {
    nome: string,
    idade: number,
    adulto: boolean
}

function soma(x: number, y: number) {
    return x + y
}

console.log(soma(2,3))