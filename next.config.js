const withSass = require('@zeit/next-sass')
// const webpack = require('webpack')
// const path = require('path')
const serverRuntimeConfig = require('./config/private') || {}
const publicRuntimeConfig = require('./config/public') || {}

module.exports = withSass({
  serverRuntimeConfig,
  publicRuntimeConfig,
  useFileSystemPublicRoutes: false
})
