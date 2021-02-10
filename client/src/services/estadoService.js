import http from "../http-common"

const findAll = () => http.get("/estados")

const find = (id) =>  http.get(`/estado/${id}`)

const create = (data) => http.post("/estado", data)

const update = (id, data) => http.put(`/estado/${id}`, data)

const remove = (id) => http.delete(`/estado/${id}`)

export default {
  findAll, 
  find,
  create,
  update,
  remove
}