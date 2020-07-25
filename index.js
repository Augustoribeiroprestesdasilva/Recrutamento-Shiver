//variaveis de ambiente
const express = require("express")
const app = express()
const handlebar = require("express-handlebars")


//config
// Tamplete engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


//porta que a API esta ouvindo
var port = 8080

// ROTAS
    // PAGINA INICIAL DO SITE
    app.get("/", function (req, res) {
        res.sendFile(__dirname + "/html/index.html")
    })

    // CAMINHO PARA O RECRUTAMENTO
    app.get("/recrutamento", function (req, res) { 
        res.sendFile(__dirname + "/html/formulario.html")
    })

    // CAMINHO PARA AUXILIO DOS NOVATOS 
    app.get("/builds", function (req, res) { 
        res.sendFile(__dirname + "/html/formulario.html")
    })

app.listen(port, function() {
    console.log("Servidor esta on-line!")
})