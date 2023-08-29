let Func = require('./func')

class Dev extends Func{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo)
        this.linguagem = linguagem
    }
}

module.exports = Dev