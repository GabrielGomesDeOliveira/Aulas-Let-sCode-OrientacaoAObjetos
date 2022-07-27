// Criando a classe para sorteio
class sorteio {
    #numeroPessoas
    constructor (numeroPessoas) {
        this.#numeroPessoas = numeroPessoas
    }

    // Método onde ira acontecer o calculo e retornar o número aleatório
    sorteiaPessoas () {
        for (let i = 1; i <= this.#numeroPessoas; i++) {
            console.log(Math.floor(Math.random() * this.#numeroPessoas + 1));
        }
        //return Math.floor(Math.random() * this.#numeroPessoas);
    }
}

// Instanciando a classe sorteio
const pessoas = new sorteio(9);
console.log(pessoas.sorteiaPessoas());