const {Router} = require('express')
const cidadeController = require('../controllers/cidadeController')
const estadoController = require('../controllers/estadoController')

const routes = Router()

// Cidade
routes.get('/cidade/:id', cidadeController.find)
routes.get('/cidades', cidadeController.findAll)
routes.post('/cidade', cidadeController.create)
routes.put('/cidade/:id', cidadeController.update)
routes.delete('/cidade/:id', cidadeController.remove)

// Estado
routes.get('/estado/:id', estadoController.find)
routes.get('/estados', estadoController.findAll)
routes.post('/estado', estadoController.create)
routes.put('/estado/:id', estadoController.update)
routes.delete('/estado/:id', estadoController.remove)

module.exports = routes