class tv {
    constructor (canal, volume, ligado) {
        this._canal = canal,
        this._volume = volume,
        this._ligado = ligado
    }

    get canal () {
        return this._canal
    }

    set canal (i) {
        return this._canal = i
    }

    get volume () {
        return this._volume
    }

    set volume (i) {
        return this._volume
    }

    get ligado () {
        return this._ligado
    }

    set ligado (i) {
        return this._ligado
    }

    ligar() {
        return "Ligando ..."
    }

    desligar() {
        return "Desligando ..."
    }

    trocaCanal(newCanal) {
        return this._canal = newCanal
    }

    aumentaVolume() {
        return this._volume++
    }

    diminuiVolume() {
        return this._volume--
    }
};

// Ligando a TV e Executando o canal e volume atual
const teste1 = new tv(230, 5, true);
console.log(teste1.ligar());
console.log(teste1);

// Aumentando o volume e trocando de canal
teste1.trocaCanal(134);
teste1.aumentaVolume();
teste1.aumentaVolume();
console.log(teste1);

// Diminuindo o volume e trocando de canal
teste1.trocaCanal(45);
teste1.diminuiVolume();
teste1.diminuiVolume();
teste1.diminuiVolume();
console.log(teste1);

// Desligando o sistema
console.log(teste1.desligar());