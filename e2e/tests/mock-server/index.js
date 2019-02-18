const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

module.exports = {
  server: null,
  start: function (config) {
    config = config || {}
    const port = config.port || process.env.PORT
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cors())
    app.use(function(request, response, next) {
      console.log(request.method, request.originalUrl)
      next()
    })

    this.reset(config)

    this.server = http.createServer(app)
    this.server
      .listen(port)
      .on('listening', () => {
        console.log('Server is listening on', port)
      })
      .on('error', errors => console.error('Error starting server:', errors))
    return this
  },
  clean: function () {
    app._router.stack.forEach((middleware, index, stack) => {
      if (middleware.name === 'router') {
        delete stack[index]
      }
    })
  },
  reset: function (config) {
    this.clean()
    for (const uri in config.routes) {
      const router = express.Router()
      if (config.routes.hasOwnProperty(uri)) {
        const routes = config.routes[uri]
        for (const key in routes) {
          if (routes.hasOwnProperty(key)) {
            const [ method, uri ] = key.split(':')
            const handler = routes[key]
            router[method](uri, handler)
          }
        }
        app.use(uri, router)
      }
    }
    return this
  },
  stop: function () {
    this.server
      .close() // Won't accept new connection
      .on('close', () => console.log('Server stopped'))
      .on('error', errors => console.log('Error stopping server:', errors))
    return this
  }
}
