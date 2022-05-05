const { context } = require('../base')

module.exports = function (API) {
  class ServerStatus extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ServerStatus] })
}