const { context } = require('../base')

module.exports = function (API) {
  class Itinerary extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Itinerary] })
}