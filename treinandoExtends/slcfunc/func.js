class Func{
    constructor(nome, idade, cargo){
        this.nome = nome
        this.idade = idade
        this.cargo = cargo
    }

    seApresentar(){
        console.log(`Olá, sou ${this.nome}, tenho ${this.idade} anos e sou o novo ${this.cargo}`)
    }

    trabalhar(){
        console.log(`Sou um ${this.cargo} e estou trabalhando`)
    }
}

module.exports = Func