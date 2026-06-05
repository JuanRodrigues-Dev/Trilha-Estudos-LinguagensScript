(async()=>{
    const db = require('./db')

    // console.log('Inserir novo Cliente')
    // const nom = "Joana"
    // const ida = "27"
    // await db.insereClientes({nome:nom,idade:ida})

    // const nom = "João"
    // const ida = 20
    // const id = 2
    // await db.atualizaClientes(id,{nome:nom,idade:ida})
    // console.log('cliente'+ id +'atualizado')

    const id = 1
    await db.deletarClientes(id)
    console.log('cliente '+ id+' deletado')
    console.log('Obter todos os Clientes')
    const clientes = await db.todosClientes()
    console.log(clientes)
})()
