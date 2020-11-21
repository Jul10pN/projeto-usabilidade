const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
app.use(bodyParser.json());

const lembretes = [
  {
    cadastro: '18/10/2020',
    realizacao: '25/12/2020',
    descricao: 'Natal'
  },
  {
    cadastro: '18/10/2020',
    realizacao: '01/01/2021',
    descricao: 'Ano Novo'
  },
  {
    cadastro: '18/10/2020',
    realizacao: '08/01/2021',
    descricao: 'Aniversario do João'
  }
];

app.use((req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

//http://localhost:3000/api/lembretes
app.get('/api/lembretes', (req, res, next) =>{
  res.json({
    mensagem: "tudo ok",
    lembretes: lembretes
  })
})

app.post('/api/lembretes', (req, res, next) =>{
  const lembrete = req.body;
  console.log(lembrete);
  res.status(201).json({mensagem: "lembrete Criado"})
})

module.exports = app
