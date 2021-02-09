const mongoose = require('mongoose')

const cidadeSchema = new mongoose.Schema({
  nome:{
    type: 'string',
    required: true
  },
  estado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Estado',
    required: true
  }
}, {
  timestamps: { 
    createdAt: 'dt_criacao', 
    updatedAt: 'dt_alteracao'
  } 
})

module.exports = mongoose.model('Cidade', cidadeSchema)