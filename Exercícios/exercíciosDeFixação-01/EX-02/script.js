let ave = {
    nome : "Gertrude",
    especie : "Canário",
    getEspecie : function() {
        return this.especie
    }
}

console.log(ave);

let peixe = {
    nome : "Robson",
    especie : "Jabarão",
}

let especie2 = ave.getEspecie.bind(peixe);
console.log(especie2());