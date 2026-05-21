const pessoa = {
    nome:"Juan",
    canal:"CFB",
    curso:"Js",
    aulas:{
        aula01:"Introdução",
        aula02:"Desenvolvimento",
        aula03:"Finalização"
    }
}

const s_json_pessoa = JSON.stringify(pessoa)
const o_json_pessoa = JSON.parse(s_json_pessoa)

console.log(s_json_pessoa)
console.log(o_json_pessoa)