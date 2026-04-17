function aluno(nome,nota){
     this.nome = nome
     this.nota = nota

     this.dados = function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}
const aluno1 = new aluno('João', 8.5)
aluno1.dados()