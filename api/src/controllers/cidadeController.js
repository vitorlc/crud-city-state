const Cidade = require('../models/cidade')

module.exports = {
  async find(req, res) {
    try {
      const cidade = await Cidade.findOne({ _id: req.params.id })
      return res.status(200).send(cidade)
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, msg: "Não foi possível encontrar a cidade" })
    }
  },
  async findAll(req, res) {
    try {
      const cidades = await Cidade.find()
      return res.status(200).send(cidades)
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, msg: "Não foi possível encontrar as cidades" })
    }
  },
  async create(req, res) {
    const cidade = new Cidade({
      nome: req.body.nome,
      estadoId: req.body.estadoId
    })
    try {
      const saved = await cidade.save()
      return res.status(200).send(saved)
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, msg: "Não foi possível criar a cidade" })
    }
  },
  async update(req, res) {
    try {
      const updated = await Cidade.findByIdAndUpdate(req.params.id, req.body, { new: true })
      return res.status(200).send(updated)
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, msg: "Não foi possível atualizar a cidade" })
    }
  },
  async remove(req, res) {
    try {
      const cidade = await Cidade.findOne({ _id: req.params.id })
      await cidade.remove()
      return res.status(200).send({ message: 'Cidade Removida' })
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, msg: "Não foi possível remover a cidade" })
    }
  }

}


