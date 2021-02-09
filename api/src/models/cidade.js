const mongoose = require('mongoose')

const cidadeSchema = new mongoose.Schema({
  nome:{
    type: 'string',
    required: true
  },
  estadoId: {
    type: 'string',
    required: true
  }
}, {
  timestamps: { 
    createdAt: 'dt_criacao', 
    updatedAt: 'dt_alteracao'
  } 
})

module.exports = mongoose.model('Cidade', cidadeSchema)