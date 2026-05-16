const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementosArray = [12,16,10,17,15,19]
p_array.innerHTML = "["+ elementosArray +"]"

btnVerificar.addEventListener("click", (evt)=>{
    const retorno = elementosArray.some((e,i)=>{
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

