class Funcionario{
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

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo)
        this.departamento = departamento
    }

    gerenciar(){
        console.log(`Sou ${this.nome}, o novo ${this.cargo} da ${this.departamento} e tenho ${this.idade} anos`)
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo)
        this.linguagem = linguagem
    }

    programar(){
        console.log(`Sou o ${this.nome}, o novo ${this.cargo}, tenho ${this.idade} anos e trabalho com ${this.linguagem}`)
    }
}

let f1 = new Funcionario('José', 22, 'Funcionário')
let g1 = new Gerente('Ricardo', 40, 'Gerente','Empresa')
let d1 = new Desenvolvedor('Joao',20,'Desenvolvedor','JavaScript')

f1.seApresentar()
g1.seApresentar()
d1.seApresentar()

f1.trabalhar()
g1.trabalhar()
d1.trabalhar()

g1.gerenciar()

d1.programar()