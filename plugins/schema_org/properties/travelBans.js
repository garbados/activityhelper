const { context } = require('../base')

module.exports = function (API) {
  class TravelBans extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TravelBans] })
}