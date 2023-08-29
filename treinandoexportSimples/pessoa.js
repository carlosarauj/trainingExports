class Pessoa{
    constructor(nome, idade){
    this.nome = nome
    this.idade = idade
    }

    apresentar(){
        console.log(`Sou o ${this.nome} e tenho ${this.idade} anos`)
    }
}

let p1 = new Pessoa('Carlos', 20)
let p2 = new Pessoa('Jeff', 30)
let p3 = new Pessoa('Dan', 24)

p1.apresentar()
p2.apresentar()
p3.apresentar()