//variaveis de ambiente
const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const path = require("path")
var port = 8080


//config
    // Tamplete engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

// CARREGANDO ROTAS
    // PAGINA INICIAL
    const home = require('./routes/home')
    // PAGIUNA DE RECRUTAMENTO
    const recrutamento = require('./routes/recrutamento')


// Grupo de Rotas
    //PAGINA INICAL
    app.use('/', home)
    // PAGIUNA DE RECRUTAMENTO
    app.use('/recrutamento', recrutamento)

// Arquivos estaticos
app.use(express.static(path.join(__dirname,"public")))

app.listen(port, () =>{
    console.log("Servidando rodando na porta: " + port)
})