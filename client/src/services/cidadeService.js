import http from "../http-common"

const findAll = () => http.get("/cidades")

const find = (id) =>  http.get(`/cidade/${id}`)

const create = (data) => http.post("/cidade", data)

const update = (id, data) => http.put(`/cidade/${id}`, data)

const remove = (id) => http.delete(`/cidade/${id}`)

export default {
  findAll, 
  find,
  create,
  update,
  remove
}