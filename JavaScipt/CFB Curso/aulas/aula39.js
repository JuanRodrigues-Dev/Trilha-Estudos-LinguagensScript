const caixa = document.querySelector('.caixa');
const btn_c = [...document.querySelectorAll('.curso')];


console.log(btn_c[0].hasChildNodes());

caixa.children.length > 0 ? console.log('Tem filhos') : console.log('Não tem filhos');

console.log(caixa.firstElementChild.innerHTML="TESTE");

//cosole.log(caixa.firstElementChild);
//console.log(caixa.lastElementChild);