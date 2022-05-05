const { context } = require('../base')

module.exports = function (API) {
  class SeatingType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SeatingType] })
}