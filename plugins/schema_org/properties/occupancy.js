const { context } = require('../base')

module.exports = function (API) {
  class Occupancy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Occupancy] })
}