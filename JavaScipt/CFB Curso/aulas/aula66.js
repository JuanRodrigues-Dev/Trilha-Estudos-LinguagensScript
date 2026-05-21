class Npc{
    static alerta = false
    constructor(energia){
        this.energia = energia
    }
    info = function(){
        console.log(`Energia: ${Npc.energia}`)
        console.log(`alerta: ${Npc.alerta?"Sim":"Não"}`)
        console.log("-------------------------------")
    }
    static alertar = function(){
        Npc.alerta =true
    }
}
const npc1 = new Npc(102)
const npc2 = new Npc(103)
const npc3 = new Npc(104)
Npc.alertar()

npc1.info()
npc2.info()
npc3.info()