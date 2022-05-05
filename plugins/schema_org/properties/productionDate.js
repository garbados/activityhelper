const { context } = require('../base')

module.exports = function (API) {
  class ProductionDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProductionDate] })
}