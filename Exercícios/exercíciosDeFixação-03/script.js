
/*
Faça uma classe Perfil que tem as seguintes informações: nome, avatar (foto de perfil) e tema.
Utilize acessors (get/set) para garantir que o tema só pode ser "light" ou "dark" e que a foto de perfil deve ser uma url (iniciada com http ou https).

Faça uma classe SmartWatch com a contagem dos passos diários de uma pessoa (pedômetro).
Garanta utilizando acessors (get/set) que os passos apenas podem ser incrementados e um método resetOnMidnight() que reseta os passos para 0.

Construa uma classe Veiculo que tem como propriedades rodas (1 a n), usaCombustivel (true/false),
uma classe Carro (tipoDecombustivel: 'gasolina', 'álcool', 'flex') que herda de Veiculo e Bicicleta (infantil: true/false - tem que ter mais que 2 rodas)
que também herda as características de Veiculo.

*/

// Construindo perfil
class perfil {
    constructor (nome, avatar, tema) {
        this._nome = nome,
        this._avatar = avatar,
        this._tema = tema
    }

    get nome () {
        return this._nome
    }

    set nome (i) {
        return this._nome = i
    }

    get avatar () {
        return this._avatar
    }

    set avatar (i) {
        return this._avatar = i
    }

    get tema () {
        return this._avatar
    }

    set tema (i) {
        return this._tema = i
    }

    conferirTema () {
        if (this._tema === "Dark" || this._tema === "Light") {
            return this._tema
        } else {
            return this._tema ="Avatar não identificado, Tente 'Light' ou 'Dark'!"
        }
    }

    conferirAvatar () {
        if (gab._avatar.startsWith("https")) {
            return this._avatar = `Acesse: ${this.avatar}`
        } else {
            return `A imagenm não é válida!`
        }
    }
}

const gab = new perfil("Gabriel","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaN0WVohxvhQy_x9RONoOvbnPtPAkvOgwEig&usqp=CAU", "Light");
console.log(gab)
console.log(gab.conferirTema());
console.log(gab.conferirAvatar());

// Construindo smartWatch
class SmartWatch {
    constructor(alturaMetros, distanciaMetros) {
        this._alturaMetros = alturaMetros,
        this._distanciametros = distanciaMetros
    }

    get altura () {
        return this._alturaMetros
    }

    set altura (i) {
        return this._alturaMetros = i
    }

    get pedometro () {
        return this._distanciametros
    }

    set pedometro (i) {
        return this.distanciaMetros = i
    }

    passosPercorridos () {
        if (this._alturaMetros >= 1.5 && this._alturaMetros <= 1.7) {
            // Calculo de quantidade de passos , supondo que pessoas entre essa altura tenham uma passada de 0.6(60cm) metros
            let passos = (this._distanciametros = this._distanciametros / 0.6).toFixed(2);
            return `O total de passos foi de ${passos}`
        } else if (this._alturaMetros > 1.7 && this._alturaMetros <= 1.9) {
            // 
            let passos = (this._distanciametros = this._distanciametros / 0.7).toFixed(2);
            return `O total de passos foi de ${passos}`
        }
    }
}

const passos1 = new SmartWatch(1.78, 3475);
console.log(passos1.passosPercorridos());

// Construindo Veiculos
class veiculo {
    constructor (rodas, usaCombustivel) {
        this._rodas = rodas
        this._usaCombustivel = usaCombustivel
    }
}

class carros extends veiculo {
    constructor (rodas, usaCombustivel, tipoCombustivel) {
        super(rodas, usaCombustivel)
        this._rodas = rodas
        this._usaCombustivel = usaCombustivel
        this._tipoCombustivel = tipoCombustivel
    }
}

class bicicleta extends veiculo {
    constructor (rodas,usaCombustivel, infantil) {
        super(rodas, usaCombustivel)
        this._rodas = rodas,
        this._usaCombustivel = usaCombustivel,
        this._infantil = infantil
    }
}