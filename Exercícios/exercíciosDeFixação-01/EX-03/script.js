
// Função Construtora
function aluno(nome, idade, email, matricula, curso){
    this.nome = nome,
    this.idade = idade,
    this.email = email,
    this.matricula = matricula,
    this.curso = curso
}

aluno.prototype.getCurso = function() {
    return this.curso;
}

//Instancie aluno
const aluno1 = new aluno("Gabriel", 22, "gabrielgomes38@hotmail.com", 1, "Desenvolvedor FullStack");
console.log(aluno1);
console.log(aluno1.getCurso());