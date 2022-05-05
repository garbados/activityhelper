const { context } = require('../base')

module.exports = function (API) {
  class ProductionCompany extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProductionCompany] })
}