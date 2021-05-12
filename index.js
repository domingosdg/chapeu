const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')


// Criacao de rotas Rotas sao os camionhos para acessar a minha apps


      
        


// Ligando as rotas
app.use(express.static("public"))
app.use("/css", express.static(__dirname + "pulic/css"))
app.use("/js", express.static(__dirname + "pulic/js"))
app.use("/img", express.static(__dirname + "pulic/img"))

app.get("", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})


app.get('/',function(req,res){
    res.render('')
})

app.post('/' ,function(req,res){
     Post.create({
         nome: req.body.nome,
         sobrenome: req.body.sobrenome,
         email: req.body.email,
         comentario: req.body.comentario
     }).then(function(){
         res.send("Poste criado com sucessos !!!")
         res.redirect('/')
     }).catch(function(erro){
         res.send("Erro no poste !!!" + erro)
     })
})

app.use(express.static('./app/public'));

app.listen(process.env.PORT || 3333,function(){
    console.log("Serdor rodando na url localhost://3333");
});
