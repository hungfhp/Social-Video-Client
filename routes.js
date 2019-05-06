const routes = require('next-routes')

module.exports = routes()
  .add('profile', '/profile/:userId?')
  .add('home', '/:linhtinh?')
