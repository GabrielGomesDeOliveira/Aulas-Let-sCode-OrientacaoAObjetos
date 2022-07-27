class animal {
    constructor(especie) {
        this._especie = especie
    }
}

class pessoa extends animal {
    constructor(nome, idade, especie = "Homo Sapiens") {
        super (especie)
        this._nome = nome,
        this._idade = idade
    }

    imprimeDados(saudacao) {
        return `${saudacao}, ${this._nome} tem ${this._idade} Anos`
    }
}

class cidadao extends pessoa {
    constructor(nome, idade, cpf, rg) {
        super(nome,idade)
        // O método super executa o construtor da classe pai
        // Neste caso a classe pai é pessoa
        // internamente o método super está fazendo
        // this._nome = nome
        // this._idade = idade
        this._cpf = cpf,
        this._rg = rg
    }
}

const pessoa1 = new pessoa("Gabriel", 22);
console.log(pessoa1);

const pessoa2 = new cidadao("Robert", 33, 0984726655164, 112455466);
console.log(pessoa2);
