const express = require('express')
const next = require('next')
const compression = require('compression')
const helmet = require('helmet')
const path = require('path')
const fs = require('fs')

const port = parseInt(process.env.PORT, 10) || 3001
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const routes = require('./routes')
const handle = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  server.use(helmet())
  server.use(compression())
  // const staticPath = path.join(__dirname, './public')
  // server.use(
  //   '/public',
  //   express.static(staticPath, {
  //     maxAge: '30d',
  //     immutable: true
  //   })
  // )
  server.get('/_healthcheck', (req, res) => {
    return res.sendStatus(200)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on https://localhost:${port}`)
  })
})
