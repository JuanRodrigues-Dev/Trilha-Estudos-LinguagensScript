(async()=>{
    const db = require('./db')
    console.log('Inserir novo Cliente')
    const nom = "Joana"
    const ida = "27"
    await db.insereClientes({nome:nom,idade:ida})

    console.log('Obter todos os Clientes')
    const clientes = await db.todosClientes()
    console.log(clientes)
})()
