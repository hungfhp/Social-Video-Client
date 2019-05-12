const routes = require('next-routes')

module.exports = routes()
  .add('profile', '/profile/:userId?')
  .add('movie', '/movie/:action(create|edit)?/:movieId?')
  .add('movies')
  .add('home', '/:linhtinh?')
