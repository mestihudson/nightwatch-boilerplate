const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = {
  server: null,
  start: function (configs) {
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cors())
    app.use(function(request, response, next) {
      console.log(request.method, request.originalUrl)
      next()
    })

    const router = express.Router()
    configs.routes.forEach(route => {
      router[route.method](route.url, route.handler)
    })

    app.use('/api', router)

    this.server = http.createServer(app)
    this.server
      .listen(configs.port)
      .on('listening', () => {
        console.log('Server is listening on', configs.port)
      })
      .on('error', errors => console.error('Error starting server:', errors))
  },
  stop: function () {
    this.server
      .close() // Won't accept new connection
      .on('close', () => console.log('Server stopped'))
      .on('error', errors => console.log('Error stopping server:', errors))
  }
}
