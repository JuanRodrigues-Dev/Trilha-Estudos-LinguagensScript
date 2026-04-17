/*Aula 33 - Seleção de Elementos querySelectorAll e querySelector - 17/06/2024
O que cada um faz:
- getElementsByTagName: Retorna uma coleção de elementos com base na tag especificada.
- getElementsByClassName: Retorna uma coleção de elementos com base na classe especificada.
- querySelectorAll: Retorna uma NodeList de elementos que correspondem a um seletor CSS específico.
- querySelector: Retorna o primeiro elemento que corresponde a um seletor CSS específico.
Diferenças:
- getElementsByTagName e getElementsByClassName retornam uma coleção ao vivo, ou seja, se o DOM for modificado, a coleção refletirá essas mudanças. Já querySelectorAll retorna uma NodeList estática, que não é atualizada automaticamente.
- querySelectorAll e querySelector permitem o uso de seletores CSS complexos, enquanto getElementsByTagName e getElementsByClassName são limitados a tags e classes específicas.
- querySelector retorna apenas o primeiro elemento correspondente, enquanto os outros métodos retornam coleções de elementos.
*/

const divTodos = document.getElementsByTagName("div");
const cursosTodos = [... document.getElementsByClassName("curso")];
const cursoc1 = [... document.getElementsByClassName("c1")];
const cursoc2 = [... document.getElementsByClassName("c2")];
const especial = document.getElementsByClassName("curso")[0];
/*
const query_divTodas=[ ... document.querySelectorA11("div[class]")]
const query_divTodas=[ ... document.querySelectorA11("div > p")]
const query_cursosTodos=[ ... document.querySelectorAl1(".curso") ]
const query_cursosC1=[ ... document.querySelectorA11(".c1,p")]
const query_cursosC2=[ ... document.querySelectorAll(".c2")]
//const query_cursoEspecial=document.querySelector("#c1")
const query_cursoEspecial=document.querySelectorA11("#c1")[0]
*/
const queryDiv = [...document.querySelectorAll("div")];
const queryCurso = [...document.querySelectorAll(".curso")];

console.log(queryCurso);
console.log(queryDiv);

//console.log(divTodos);
//console.log(cursosTodos);
//console.log(cursoc1);
//console.log(cursoc2);
//console.log(especial);

//cursoc1.map((c)=>{
//    c.classList.add("destacado");
//});