const mongoose = require('mongoose')

const estadoSchema = new mongoose.Schema({
  nome:{
    type: 'string',
    required: true
  },
  abreviacao: {
    type: 'string',
    required: true
  }
}, {
  timestamps: { 
    createdAt: 'dt_criacao', 
    updatedAt: 'dt_alteracao'
  } 
})

module.exports = mongoose.model('Estado', estadoSchema)