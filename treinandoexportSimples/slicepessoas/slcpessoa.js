class Pessoa{
    constructor(nome, idade){
    this.nome = nome
    this.idade = idade
    }

    apresentar(){
        console.log(`Sou o ${this.nome} e tenho ${this.idade} anos`)
    }
}

module.exports = Pessoa