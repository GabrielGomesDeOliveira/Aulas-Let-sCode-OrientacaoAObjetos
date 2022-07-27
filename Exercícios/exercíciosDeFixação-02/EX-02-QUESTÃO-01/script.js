const curso = {
    _nome : "",
    _prova1: "",
    _prova2: "",
    _media: "",

    get nome () {
        return this._nome;
    },

    set nome (i) {
        return this.nome = i;
    },

    get prova1 () {
        return this._prova1;
    },

    set prova1 (i) {
        return this._prova1 = i;
    },

    get prova2 () {
        return this._prova2;
    },

    set prova2 (i) {
        return this._prova2 = i;
    },

    get media () {
        if (this._prova1 == 0) {
            return "Não é possivel calcular a média";
        } else {
            return (this._prova1 + this._prova2)/2
        };
    },

};

curso._nome = "Desenvolvedor FullStack";
curso._prova1 = 2;
curso._prova2 = 5;

console.log(`A nota do curso ${curso._nome} é de ${curso.media}!`);