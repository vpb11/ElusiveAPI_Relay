'use strict'
const chat = require('./handlers/chat')
const configured = require('./handlers/configured')

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/api/chat', chat)
  app.get('/configured', configured(opts))
}
