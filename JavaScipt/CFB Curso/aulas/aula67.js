const Nave = function(energia){
    this.energia = energia
    this.disparos = 100
}


const n1 = new Nave(199)

Nave.prototype.vidas = 3
Nave.prototype.dispara=function(){
    if(this,this.disparos>0){
        this.disparos --
    }
}
n1.dispara()
n1.dispara()
n1.dispara()
n1.dispara()

console.log(Nave)
console.log(n1)
console.log(n1.disparos)