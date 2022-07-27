// Try = usado para condições de sucesso
// try {

// }
// catch = usado para condições erradas
// catch() {

// }

function qualquerCoisa() {
    let num = 1;
    return num.toUpperCase();
}

/*
try {
    // Invocando a função
    qualquerCoisa();
}
catch(error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
}*/

/*
function funciona () {
    console.log("Turminha da pesada");
}

try {
    qualquerCoisa();
    console.log("Dando sequencia");
}
catch (err) {
    console.log(err);
}
try {
    funciona();
}
catch (error) {
    console.log(error);
} */

try {
    qualquerCoisa();
}
catch (err) {
    console.log(err);
}
finally {
    console.log("Final do try ou do catch");
}

function validaString(nome){
    try {
        if (typeof nome != "String") {
            // Throw é uma declaração que lança
            // Qualquer coisa apos o throw não é executado
            throw new TypeError("O valor do nome do parâmetro")
        } else {
            console.log(`Olá ${nome}`)
        }
    }
    catch(e) {
        console.log(e);
    }
}