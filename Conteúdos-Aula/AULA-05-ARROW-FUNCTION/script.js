// ESTRUTURA => (argumentos) => {Corpo da Função}

const soma = (n1, n2) => {
    return n1 + n2
};
console.log(soma(1,2));

// Se tiver uma unica instrução
const multiplicacao = (n1, n2) => n1 * n2;
console.log(multiplicacao(4,5));

// Retorno Implicito

const x1 = () => "retorno implicito";
console.log(x1());

// Funcionamenteo do This
const carro = {
    modelo: "hb20",
    marca: "Hyundai",
    nomeCompleto : function() {
        return `${this.modelo} ${this.marca}`
    } 
}
console.log(carro.nomeCompleto());

// Arrow Function This
const carros = {
    modelo: "hb20",
    marca: "Hyundai",
    nomeCompleto : () => {
        return `${this.modelo} ${this.marca}`
    } 
}
console.log(carros.nomeCompleto());