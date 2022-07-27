class cnh {
    constructor (pais, idade, categoria) {
        this._pais = pais,
        this._idade = idade,
        this._categoria = categoria
    }

    get pais () {
        return this._pais
    }

    set pais (i) {
        return this._pais = i
    }

    get idade () {
        return this._idade
    }
    
    set idade (i) {
        return this._idade = i
    }

    get categoria () {
        return this._categoria
    }

    set categoria (i) {
        return this._categoria = i
    }

    conferirCNH () {
        if (this._pais === "US" || this._pais === "CA") {
            if (this._idade < 16) {
                return `Mora em ${this._pais} Tem ${this._idade} anos e não pode tirar a carteira!`
            } else {
                return `Mora em ${this._pais} Tem ${this._idade} anos e pode tirar a carteira!`
            }
        } else if (this._pais === "CH" || this._pais === "RU") {
            if (this._idade < 21) {
                return `Mora em ${this._pais} Tem ${this._idade} anos e não pode tirar a carteira!`
            } else {
                return `Mora em ${this._pais} Tem ${this._idade} anos e pode tirar a carteira!`
            }
        } else if ( this._pais == "BR") {
            if (this._idade < 18) {
                return `Mora em ${this._pais} Tem ${this._idade} e não pode tirar a carteira!`
            } else {
                return `Mora em ${this._pais} Tem ${this._idade} E tem a carteira da categoria ${this._categoria}!`
            }
        }
    }
}

// Testando países US e CA
const aluno1 = new cnh("US", 15);
console.log(aluno1.conferirCNH());

const aluno2 = new cnh("CA", 17);
console.log(aluno2.conferirCNH());

const aluno44 = new cnh(document.getElementById());

const aluno3 = new cnh("CH", 20);
console.log(aluno3.conferirCNH());

const aluno4 = new cnh("RU", 22);
console.log(aluno4.conferirCNH());

const aluno5 = new cnh("BR", 17, "A");
console.log(aluno5.conferirCNH());

const aluno6 = new cnh("BR", 22, "A & B");
console.log(aluno6.conferirCNH());