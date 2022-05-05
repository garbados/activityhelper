const { context } = require('../base')

module.exports = function (API) {
  class SubTrip extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SubTrip] })
}