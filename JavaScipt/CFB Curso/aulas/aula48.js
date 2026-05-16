const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementosArray = [12,18,18,22,29,20]
p_array.innerHTML = "["+ elementosArray +"]"

btnVerificar.addEventListener("click", (evt)=>{
    const retorno = elementosArray.every((e,i)=>{
        if(e<18){
                resultado.innerHTML ="Array não conforme na posição " + (i+1)
        }
        return e>=18
    })
    if(retorno){
        resultado.innerHTML = "OK"
    }
    // console.log(retorno)
})

