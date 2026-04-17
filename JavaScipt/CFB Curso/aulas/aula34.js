/* Eventos addEventListener() e removeEventListener()

addEventListener() - Adiciona um evento a um elemento HTML. Ele recebe dois parâmetros: o tipo de evento (como 'click', 'mouseover', etc.) e a função que será executada quando o evento ocorrer.
removeEventListener() - Remove um evento previamente adicionado a um elemento HTML. Ele também recebe dois parâmetros: o tipo de evento e a função que foi associada a esse evento.

*/

const msg = () => {
    alert('clicou');
}
const cursos = [...document.querySelectorAll('.curso')];
cursos.map((curso) => {
    curso.addEventListener("click", (evt) => {
        const el = evt.target;
        el.classList.add("destacado")

        console.log(el.innerText + "Foi clicado") ;
    });
});


const c1 = document.querySelector('#c1');

c1.addEventListener("click", msg);
c1.addEventListener("click", (evt) => {
    const el = evt.target;
    el.classList.add("destacado")
});
//c1.removeEventListener("click", msg);
