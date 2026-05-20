const Pessoa={
    nome:"Juan",

    getNome:function(){
        return this.nome
    },
    setNome(nome){
        this.nome=nome
    },
}
const p2 = Pessoa
const p3 =  Pessoa

p3.nome="Joana"
p2.nome= "Juan"
console.log(p3.getNome())