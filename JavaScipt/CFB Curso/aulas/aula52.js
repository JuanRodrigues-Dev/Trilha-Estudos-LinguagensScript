const caixa1=document.querySelector("#caixa")

let cores = ["azul", "vermelho", "verde", ["claro","escuro","medio"]]
let cursos = ["HTML","CSS","JavaScript",cores]
// cursos.push("C++")
// cursos.shift()
// cursos.unshift("Phyton")
// cursos.pop("HTML")
console.log(cursos[3][3][1])
cursos.map((el)=>{
    let p = document.createElement("p")
    p.innerHTML = el
    caixa1.appendChild(p)
})
