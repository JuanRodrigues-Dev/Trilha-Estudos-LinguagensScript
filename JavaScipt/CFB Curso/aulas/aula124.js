const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById("p_nivel")
const p_pres = document.getElementById("p_press")
const btn_texto = document.getElementById("btn_texto")
const endpointBase = "http://localhost:8080"
const endpointBuscar = `${endpointBase}/buscar`
const endpointGravar = `${endpointBase}/gravar`

const obterDados = ()=>{
    fetch(endpointBuscar)
    .then(res =>res.json())
    .then(dados=>{
        console.log(dados)
        p_temp.innerHTML = dados.temperatura
        p_nivel.innerHTML = dados.nivel
        p_pres.innerHTML = dados.pressao
    })
}
//get , buscar , post enviar
//let inteval = setInterval(obterDados,1000)

let dados={
    nome: "Bruno",
    curso: "Java Script",
    canal : "CFB Curso"
}

let cabecalho = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(dados)
}

const gravarDados=()=>{
    fetch(endpointGravar, cabecalho)
    .then(res => res.json())
    .then(ret=>{
        console.log(ret)
    })
}

btn_texto.addEventListener("click",(evt)=>{
    gravarDados()
})