/*
Funções Parametrizadas em JavaScript
Funções podem receber parâmetros para trabalhar com valores dinâmicos.
*/
let valor = 0

function add(v){
    return valor + v
}

valor = add(10)
console.log(valor) //10

function soma(a,b){
    return a+b
}

//console.log(soma(10,20))