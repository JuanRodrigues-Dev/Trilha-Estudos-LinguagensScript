// const filtroMaior = (valor,indice,arr)=>{
//     if(valor>=18)
//         return valor
// }
const idades = [15,21,32,43,44,12,50,60]

const maior = idades.filter((valor,indice,arr)=>{
    if(valor>=18){
        return valor
    }
})

const menor = idades.filter((valor)=>{
    if(valor<18){
        return valor
    }

})


console.log(idades)
console.log(maior)
console.log(menor)