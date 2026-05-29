const endpoint = "http://localhost:8080"
fetch(endpoint)
.then(res =>res.json())
.then(dados=>{
    console.log(dados)
})