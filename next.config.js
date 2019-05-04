const withSass = require('@zeit/next-sass')
// const webpack = require('webpack')
// const path = require('path')
const serverRuntimeConfig = require('./config/private') || {}

module.exports = withSass({
  serverRuntimeConfig
})
