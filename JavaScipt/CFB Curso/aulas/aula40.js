const caixa1 = document.querySelector("#caixa1")
const cursos = ["HTML", "CSS", "JavaScript", "Phyton" , "Java" , "C++"]

cursos.map((el,chave)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c"+chave)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el
    caixa1.appendChild(novoElemento)
})



