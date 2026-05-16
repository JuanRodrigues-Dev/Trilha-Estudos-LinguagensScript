const caixa1 = document.querySelector("#caixa1")
const cursos = ["HTML", "CSS", "JavaScript", "Phyton" , "Java" , "C++"]

cursos.map((el,chave)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c"+chave)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el
    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src","#")
    btn_lixeira.setAttribute("class" , "lixeira")
    btn_lixeira.addEventListener("click",(evt)=>{
        caixa1.removeChild(evt.target.parentNode)
    })
    novoElemento.appendChild(btn_lixeira)
    
    caixa1.appendChild(novoElemento)
})



