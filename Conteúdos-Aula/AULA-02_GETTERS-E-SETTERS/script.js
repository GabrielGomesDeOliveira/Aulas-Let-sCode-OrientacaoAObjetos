// Get serve para receber alguma informação

// Set retorna uma informação, precisa de um parâmetro

var variavel = {
    valor : 0,
    conversor : 0,
    get moeda () {
        return "RS" + this.valor.toFixed(2).replace(".", ",");
    },

    //retorna a propriedade valor
    get int () {
        return this.valor
    },
    // recebe
    set int (i) {
        this.valor = i
    },
    get conversao() {
        if (this.conversor === "peso") {
            return 0.046 * this.valor
        }
    }
};
variavel.int = 150;
variavel.conversor = "peso";

console.log(variavel);
console.log(variavel.conversao);


// Get serve para retornar o valor
// Set serve par aatribuir o valor a propriedade
console.log("=== Carros ===")

const carros = {
    _cor: "",
    _marca: "",

    get cor () {
        return this._cor
    },

    set cor (i) {
        this._cor = i
    },

    get marca () {
        return this._marca
    },

    set marca (i) {
        this._marca = i
    },

    get mensagem () {
        return "O carro é " + this.marca + " E a cor é " + this.cor; 
    }
}

carros.cor = "Azul";
carros.marca = "BMW";
console.log(carros);
console.log(carros.mensagem);