const { context } = require('../base')

module.exports = function (API) {
  class Episode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Episode] })
}