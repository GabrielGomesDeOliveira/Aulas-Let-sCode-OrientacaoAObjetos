// Encapsulamento
// # => significa que o atributo é privado

class pessoa {
    constructor(nome, idade) {
        this.nome = nome,
        this.idade = idade
    }
    apresentar () {
        return `O meu nome é ${this.nome}
        e tenho ${this.idade}`
    }
}

// Instanciar a classe pessoa
const eu = new pessoa("Gabriel", 22);
console.log(eu);
console.log(eu.apresentar());
console.log(eu.nome);
// Transformar em um atributo json
console.log(JSON.stringify(eu));
// Acessa as chaves
console.log(Object.keys(eu));
// Acessa os valores
console.log(Object.values(eu));

// Trnsformar classe em privada

class pessoaPrivada {
    #nome
    #idade
    constructor(nome, idade) {
        this.#nome = nome,
        this.#idade = idade
    }
    apresentar () {
        return `O meu nome é ${this.#nome}
        e tenho ${this.#idade}`
    }
}

// Instanciar a classe pessoa
// JSON é um objeto ja existente , e transforma em um objeto JSON, pode acessar uma propriedade privada
const eu2 = new pessoaPrivada("Gabriel", 22);
console.log(eu2);
console.log(eu2.apresentar());
console.log(eu2.nome);
// Transformar em um atributo json
console.log(JSON.stringify(eu2));
// Acessa as chaves
console.log(Object.keys(eu2));
// Acessa os valores
console.log(Object.values(eu2));