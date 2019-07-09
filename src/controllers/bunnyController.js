const model = require('../models/bunnyModels')


getBunnies = (req, res, next) => {
  model.getAll(req.body)
  .then(bunnies => res.status(200).send({bunnies}))
  .catch(err => console.error(err))
}

module.exports = {getBunnies}
