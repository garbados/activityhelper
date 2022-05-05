const { context } = require('../base')

module.exports = function (API) {
  class SeatingCapacity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SeatingCapacity] })
}