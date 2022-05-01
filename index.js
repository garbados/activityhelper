const { API } = require('./base')

// register core plugins
API.plugin(require('./plugins'))

module.exports = API
