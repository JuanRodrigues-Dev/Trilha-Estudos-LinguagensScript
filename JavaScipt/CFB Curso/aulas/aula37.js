/*
parando a propagação de eventos
Stop Propagation
o que faz o stopPropagation?
O método stopPropagation() é usado para impedir que um evento se propague para os elementos pai. Quando um evento é acionado em um elemento, ele pode se propagar para os elementos pai, o que pode causar comportamentos indesejados. Ao usar stopPropagation(), você pode evitar que o evento se propague além do elemento atual, garantindo que apenas o manipulador de eventos do elemento específico seja executado. Isso é útil quando você deseja controlar o comportamento de eventos em elementos aninhados e evitar que eles afetem outros elementos na hierarquia do DOM.
*/
const caixa1 = document.querySelector('#caixa1');

const btn_c1 = document.querySelector('#c1');
const cursos = [...document.querySelectorAll('.curso')];
caixa1.addEventListener('click', function(evt) {
    console.log(evt.target);
});

cursos.map((el)=>{
    el.addEventListener('click',(evt) => {
        evt.stopPropagation();
    });
})




