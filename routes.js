const routes = require('next-routes')

module.exports = routes()
  .add('profile', '/profile/:userId?')
  .add('movie', '/movie/:movieId')
  .add('movies')
  .add('home', '/:linhtinh?')
