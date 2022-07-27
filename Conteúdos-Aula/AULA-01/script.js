/*
const pessoa = {
    nome: "Gabriel",
    idade: 22,
    cumprimentaPessoa(nome ="Juao") {
        return console.log("Seja Bem Vindo: " + nome);
    },
};

const mensagem = pessoa.cumprimentaPessoa("Gabriel");


const counter = {
    count: 0,
    next: function() {
        return this.count++;
    }
}

counter.next()

console.log(counter.count);
*/

/*
Em js, conseguimos chamar funções de algumas formas:
==chamada de função (function invocation)
==chamada de método (method invocation)
==Chamada de Contrutor (Constructor invocation)
==chamada indireta (indirect invocation)
*/

/*
function show() {
    console.log(this === window);
}
show()
console.log(window)
*/

// Invocação de Método
// Quando eu chamar um método do objeto, o js aponta o This para o objeto que possui o método
/*
let carro = {
    marca: "Hyundai",
    ano: 2010,
    getMarca: function() {
        return this.marca
    }
}

let carro2 = {
    marca: "Fiat",
    ano: 2020,
}

let carro3 = {
    marca: "VuquisVague",
    ano: 20222,
}

console.log(carro.getMarca());
let marca = carro.getMarca;
console.log(marca);


// Você pode atribuir uma função de um objeto para outro objeto
// mas precisa ter o mesma propriedade
// bind ==> ele pega uma função de um objeto e usa no novo objeto
let marca1 = carro.getMarca.bind(carro2);
console.log(marca1());

let marca2 = carro.getMarca.bind(carro3);
console.log(marca2());
*/

// Chamada de Construtor
//

function carro(placa, marca) {
    this.placa = placa;
    this.marca = marca;
}
console.log(carro())

// Criar uma função dentro da função carro
// prototype => acessa o construtor da função, protótipo da função criada
carro.prototype.getPlaca = function() {
    return this.placa
}

console.log(carro);

//instanciando um noco carro

let carro1 = new carro("ddx21", "Fusca");
console.log(carro1);
// acessando a função
console.log(carro1.getPlaca());

function carro2(marca) {
    if (!(this instanceof carro2)) {
        throw Error("Use o operador New para instanciar o objeto!!!")
    }
    this.marca = marca;
}

let Arromba = new carro2("Arromba");
console.log(Arromba)
