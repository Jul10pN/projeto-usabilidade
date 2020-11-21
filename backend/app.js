const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const Lembrete = require('./models/lembrete')
const bodyParser = require ('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://User:19041505@cluster0.5rh7y.mongodb.net/bd-lembrete?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
  console.log("CONEXÃO OK");
}).catch((error) => {
  console.log("CONEXÃO FALHOU");
  console.log(error);
})

const lembretes = [];

app.use((req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

//http://localhost:3000/api/lembretes
app.get('/api/lembretes', (req, res, next) =>{
  Lembrete.find().then(
    documents => {
      res.status(200).json ({
        mensagem: "Tudo Ok",
        lembretes: documents
      });
    }
  );
})

app.post('/api/lembretes', (req, res, next) =>{
  const lembrete = new Lembrete({
    cadastro: req.body.cadastro,
    realizacao: req.body.realizacao,
    descricao: req.body.descricao
  });

  lembrete.save();

  console.log(lembrete);
  res.status(201).json({mensagem: "lembrete Criado"})
})

module.exports = app
