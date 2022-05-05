const { context } = require('../base')

module.exports = function (API) {
  class AvailableIn extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AvailableIn] })
}