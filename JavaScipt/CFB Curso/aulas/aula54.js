const caixa1 = document.querySelector("#caixa")

let mapa = new Map()

mapa.set("curso","JavaScript")
mapa.set(10,"CFB Cursos")
mapa.set(1,10)
mapa.set("canal",100)
mapa.delete(1)
console.log(mapa)
if(mapa.has("canal")){
    caixa1.innerHTML = "A chave existe na coleções"
}else{
    caixa1.innerHTML = "Não esta na coleções"
}

mapa.forEach((el)=>{
    console.log(el)
})

// caixa1.innerHTML = mapa.get("curso")