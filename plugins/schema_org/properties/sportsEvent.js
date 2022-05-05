const { context } = require('../base')

module.exports = function (API) {
  class SportsEvent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SportsEvent] })
}