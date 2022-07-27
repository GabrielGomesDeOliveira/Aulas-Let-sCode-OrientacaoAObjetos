class ave {
    constructor(cor, especie) {
        this.cor = cor,
        this.especie = especie
    }
}

// Instanciar a classse ave
let a = new ave("Branco", "Galinha");
console.log(a);

// ira fazer uma herança da classe ave 
// Classe filho
class passaro extends ave {
    constructor(cor, especie, voa) {
        // com o super voc~e pode passar os parametros de uma classe filho para o pai
        super(cor, especie)
        this.voa = voa
    }
}

let b = new passaro("Rosa", "Jabutirica", true);
console.log(b);

// Usando o Extends para um objeto pré construido