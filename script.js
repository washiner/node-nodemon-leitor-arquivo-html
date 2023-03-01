const express = require('express')
const app = express()


app.get("/leitura", function(require, response){
    response.sendFile(__dirname + "/arquivos_html/index.html")

})

app.get('/', function(require,response){
    response.send('seja bem vindo')
})

app.get('/sobre', function(require,response){
    response.sendFile(__dirname + "/arquivos_html/sobre.html")
})

app.listen(3000, console.log('Server Rodando'))