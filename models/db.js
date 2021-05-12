const Sequelize = require('sequelize')
// Conexao com a bd mysql

const sequelize = new Sequelize('conex','root','sucessos',{
    host: "localhost",
    dialect: 'mysql'
}) 

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}