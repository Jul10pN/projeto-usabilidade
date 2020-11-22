const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const Lembrete = require('./models/lembrete')
const bodyParser = require ('body-parser');
const { json } = require('body-parser');
const lembrete = require('./models/lembrete');

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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});

//http://localhost:3000/api/lembretes
app.get('/api/lembretes', (req, res, next) =>{
  Lembrete.find().then(
    documents => {
      console.log(documents);
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

  lembrete.save().then(lembreteInserido =>{
    console.log(lembreteInserido);
    res.status(201).json({mensagem: "lembrete Criado", id: lembreteInserido._id})
  });
})

app.delete('/api/lembretes/:id', (req, res, next) => {
  Lembrete.deleteOne({_id: req.params.id}).then((resultado) => {
    console.log(resultado);
    res.status(200).json({mensaagem: "Lembrete Removido"});
  })
})

app.put("/api/lembretes/:id", (req, res, next) => {
  const lembrete = new Lembrete({
    _id: req.params.id,
    cadastro: req.body.cadastro,
    realizacao: req.body.realizacao,
    descricao: req.body.descricao
  });
  Lembrete.updateOne({
    _id: req.params.id
  },
    lembrete
  ).then((resultado) => {
    console.log(resultado);
  });
  res.status(200).json({
    mensaagem: 'Lembrete atualizado com sucesso'
  })
});


module.exports = app
