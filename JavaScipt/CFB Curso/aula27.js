/*
Funçoes Geradoras em JavaScript
Em JavaScript, uma função geradora é uma função que pode ser pausada e retomada, permitindo a geração de uma sequência de valores ao longo do tempo. As funções geradoras são definidas usando a sintaxe function* e utilizam a palavra-chave yield para produzir valores.
*/
/*
function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}
const itc = cores()
console.log(itc)
console.log(itc.next().value) // Vermelho
console.log(itc.next().value) // Verde
console.log(itc.next().value) // Azul
console.log(itc.next().value) // undefined
*/
/*
function* perguntas(){
    const nome = yield 'Qual é o seu nome?'
    const esporte = yield 'Qual é o seu esporte favorito?'
    return `Seu nome é ${nome} e seu esporte favorito é ${esporte}.`

}

const itp = perguntas()
console.log(itp.next().value) // Qual é o seu nome?
console.log(itp.next('João').value) // Qual é o seu esporte favorito?
console.log(itp.next('Futebol').value) // Seu nome é João e seu esporte favorito é Futebol.
*/
function* contador(){
    let i = 0
    while(true){
        yield i++
    }
}
const itc = contador()
console.log(itc.next().value) // 0
console.log(itc.next().value) // 1
console.log(itc.next().value) // 2
for(let j=0; j<5; j++){
    console.log(itc.next().value) // 3, 4, 5, 6, 7
}