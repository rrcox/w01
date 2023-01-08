const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Karen Cox');
});

module.exports = routes;