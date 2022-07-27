// Consegue pegar os métodos de uma classe pai para filho, e trazer resultado diferente

class pessoa {
    constructor(nome, idade, endereco) {
        this._nome = nome,
        this._idade = idade,
        this._endereco = endereco
    }
    cumprimentaPessoa = () => `${this._nome}, Prazer em te conhecer`
}

class pessoaFisica extends pessoa {
    constructor(nome, idade, endereco, RG) {
        super(nome, idade, endereco)
        this._RG = RG
    }

    cumprimentaPessoa = () => `Olá, ${this._nome}, RG: ${this._RG}`
}

const pessoa1 = new pessoaFisica(
    "Gabriel",
    22,
    "Av Mandacaru",
    123321223534
);