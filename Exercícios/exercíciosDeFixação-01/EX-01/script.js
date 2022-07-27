

const aluno = {
    nome: "Gabriel",
    matricula: 1,
    idade: 22,

    cursando : function(curso) {
        curso = "desenvolvedor FullStack";
        return curso
    }
}

console.log(aluno);
console.log(aluno.cursando());
