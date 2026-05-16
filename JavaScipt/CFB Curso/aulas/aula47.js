const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementosArray = [10,5,8,2,9,20]
p_array.innerHTML = "["+ elementosArray +"]"

btnPesquisar.addEventListener("click",(evt)=>{
    resultado.innerHTML ="Valor não Encontrado"
    const retorno = elementosArray.find((el,ind)=>{
        if(el.toUpperCase()==txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML ="Valor pesquisado "+ el + " na posição "+ (ind+1)
            return true
        }
    })
    console.log(retorno);
})