const { context } = require('../base')

module.exports = function (API) {
  class SubEvents extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SubEvents] })
}