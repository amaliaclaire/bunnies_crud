const knex = require("../../db/knex")
const uuid = require("uuid/v4")

const getAll = (body) => {
  return knex("bunnies")
  .select("name")
  .where(body)
  .then(result => result)
  .catch(err => console.error(err))
}

module.exports = {
  getAll
}
