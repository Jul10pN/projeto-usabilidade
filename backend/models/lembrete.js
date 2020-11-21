const { Mongoose } = require("mongoose")
const mongoose = require ('mongoose');
const { stringify } = require("querystring");

const lembreteSchema = mongoose.Schema({
  cadastro: {
    type: String,
    required: false,
    default: '01/01/2020'
  },
  realizacao: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Lembrete', lembreteSchema)
