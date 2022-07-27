const tv = {
    _canal: "",
    _volume: "",
    _ligada: "",

    get canal () {
        return this._canal
    },

    set canal (i) {
        return this._canal = i
    },

    get volume () {
        return this._volume
    },

    set volume (i) {
        return this._volume = i
    },

    get ligada () {
        return this._ligada
    },

    set ligada (i) {
        return this._ligada = i
    },

    liga: function() {
        return "Ligando ..."
    },

    desliga: function() {
        return "Desligando ..."
    },

    mudaCanal: function(newCanal) {
        this._canal = newCanal
        return this._canal
    },

    aumentarVolume: function() {
        return this._volume++
    },

    diminuiVolume: function() {
        return this._volume--
    }
};

// Ligando a tv
console.log("=== TV ligada configs iniciais ===");
console.log(tv.liga());
tv._canal = 200;
tv._volume = 6;
tv._ligada = true;
console.log(tv);

// Alterando canal e aumentando volume
console.log("=== Canal alterado e Volume Aumentado ===");
tv.mudaCanal(230);
tv.aumentarVolume();
tv.aumentarVolume();
tv.aumentarVolume();
console.log(tv);

// Alterando canal e diminuindo o volume
console.log("=== Alterando o canal e Diminuindo o Volume ===");
tv._canal = 100;
tv.diminuiVolume();
tv.diminuiVolume();
tv.diminuiVolume();
tv.diminuiVolume();
console.log(tv);

// Desligando a tv
console.log("=== Desligando a TV ===");
console.log(tv.desliga());