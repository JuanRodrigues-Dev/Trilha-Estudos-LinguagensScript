const cursosTodos = [... document.getElementsByClassName("curso")];
const cursoc1 = [... document.getElementsByClassName("c1")];
const cursoc2 = [... document.getElementsByClassName("c2")];
const especial = document.getElementsByClassName("curso")[0];

console.log(cursosTodos);
console.log(cursoc1);
console.log(cursoc2);
console.log(especial);
cursoc1.map((c)=>{
    c.classList.add("destacado");
});