const db = require("../data/database")
const users = require("../data/models/user")

module.exports = (app) => {
  /* GET users listing. */
  app.get('/data', (req, res) => {
    users.findAll()
    .then(user => {
      console.log(user);
      res.sendStatus(200);
    })
    .catch(err => console.log(err));
  })
}