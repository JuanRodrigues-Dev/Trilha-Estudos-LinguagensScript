/*
Funcões Anônimas em JavaScript
Funções anônimas são funções que não possuem um nome definido. Elas são frequentemente usadas como expressões de função ou como argumentos para outras funções.
*/
let f = function(...valores){
    let soma = 0
    let i
    for(i of valores){
        soma += i
    }

    return soma
}

const fu = new Function('a', 'b', 'return a + b' ) //Função construtora

console.log(fu(5,9)) //8
