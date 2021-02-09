const Estado = require('../models/estado')

module.exports = {
  async find(req, res) {
    try {
      const estado = await Estado.findOne({ _id: req.params.id })
      return res.status(200).send(estado)
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, msg: "Não foi possível encontrar o estado" })
    }
  },
  async findAll(req, res) {
    try {
      const estados = await Estado.find()
      return res.status(200).send(estados)
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, msg: "Não foi possível encontrar os estados" })
    }
  },
  async create(req, res) {
    const estado = new Estado({
      nome: req.body.nome,
      abreviacao: req.body.abreviacao
    })
    try {
      const saved = await estado.save()
      return res.status(200).send(saved)
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, msg: "Não foi possível adicionar o estado" })
    }
  },
  async update(req, res) {
    try {
      const updated = await Estado.findByIdAndUpdate(req.params.id, req.body, { new: true })
      return res.status(200).send(updated)
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, msg: "Não foi possível atualizar o estado" })
    }
  },
  async remove(req, res) {
    try {
      const estado = await Estado.findOne({ _id: req.params.id })
      await estado.remove()
      return res.status(200).send({ message: 'Estado Removido' })
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, msg: "Não foi possível remover o estado" })
    }
  }

}
