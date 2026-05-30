const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById("p_nivel")
const p_pres = document.getElementById("p_press")
const endpoint = "http://localhost:8080"

const obterDados = ()=>{
    fetch(endpoint)
    .then(res =>res.json())
    .then(dados=>{
        console.log(dados)
        p_temp.innerHTML = dados.temperatura
        p_nivel.innerHTML = dados.nivel
        p_pres.innerHTML = dados.pressao
        
    })
}

let inteval = setInterval(obterDados,1000)
