/*
Função dentro de Função em JavaScript
Em JavaScript, é possível definir uma função dentro de outra função. A função interna pode acessar variáveis e parâmetros da função externa.
*/
const soma = (...valores)=>{
    const somar = val=>{
        let res =0
        for(let v of val){
            res += v
        }
        return res
    }
    return somar(valores)
}
console.log(soma(1,2,3,4,5)) // 15
console.log(soma(10,20,30)) // 60
console.log(soma(5,10,15,20,25,30)) // 105   
