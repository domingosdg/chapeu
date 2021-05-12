const db = require('./db')
const Post = db.sequelize.define('postagens', {
    nome: {
        type: db.Sequelize.STRING
    },
    sobrenome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    comentario: {
        type: db.Sequelize.TEXT
    }
    
})

 // Post.sync({force:true})

  module.exports = Post