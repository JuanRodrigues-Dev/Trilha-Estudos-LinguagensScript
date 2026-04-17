/*
Operador Spread (...)
Permite expandir elementos iteráveis em locais onde zero ou mais argumentos (para chamadas de função) 
ou elementos (para arrays literais) são esperados, ou propriedades de objeto em locais onde zero ou mais
*/
/*
let n1=[10,20,30]
let n2=[11,22,33,44,55]
let n3=[...n1,...n2]
console.log("n1 : " + n1)
console.log("n2 : " + n2)
console.log("n3 : " + n3)

const jogador1={nome:"Ana", energia:25 , vidas:3,magia:10}
const jogador2={nome:"Bia", energia:15 , vidas:3,velocidade:20}
const jogador3={...jogador1,...jogador2}

console.log(jogador3)
*/
/*
const soma = (v1,v2,v3) => {
    return v1+v2+v3
}
let valores=[1,3,4]
console.log(soma(...valores))
*/

const objs=document.getElementsByTagName("div")
const objs1=[...document.getElementsByTagName("div")]
objs1.forEach(element => {
    console.log(element)
})
console.log(objs)
console.log(objs1)