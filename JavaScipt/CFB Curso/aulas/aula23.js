/*
Parametros Rest é uma funcionalidade do JavaScript que permite que uma função aceite um número indefinido de argumentos como um array. Isso é útil quando você não sabe quantos argumentos serão passados para a função.

*/

function soma(...valores){
    let soma = 0
    let i
    for(i of valores){
        soma += i
    }
    return soma
}

console.log(soma(5,3,2,4,6,7,8)) //

