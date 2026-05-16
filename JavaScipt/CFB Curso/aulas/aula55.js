const caixa1 = document.querySelector("caixa")

let musicas = new Set(["musica1","musica boa","musica 10"])

musicas.add("musica muito legal")
musicas.add("musica1")
musicas.add("musica 10")
musicas.delete("musica1")

console.log(musicas)

// musicas.forEach((el)=>{
//     caixa1.innerHTML += el +"<br/>"
// })
