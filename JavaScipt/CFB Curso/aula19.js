/*
Diferanca de Break e Continue
Break: Interrompe o loop completamente
Continue: Pula para a próxima iteração do loop
*/
let n=0
let max=10
/*
while(n<max){
    console.log("Número: "+n)
    if(n==5){
        console.log("Chegou ao valor 5, saindo do loop.")
        break
    }
    n++
}
    */
for(n=0;n<max;n++){
    if(n==5){
        console.log("Chegou ao valor 5, pulando para a próxima iteração.")
        continue
    }
    console.log("Número: "+n)
}
