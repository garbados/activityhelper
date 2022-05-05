const { context } = require('../base')

module.exports = function (API) {
  class BusName extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BusName] })
}