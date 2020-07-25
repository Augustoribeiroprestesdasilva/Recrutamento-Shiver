
const Sequelize = require('sequelize')

var database = " "// nome do banco de dados
var user = "root"
var password = "cuzinho1"


const sequelize = new Sequelize(database, user, password, {
    host:"localhost",
    dialect: "mysql"
})


sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso ao banco de dados!")
}).catch(function(error){
    console.log("Falha ao se conectar ao banco de dados: "+error)
})