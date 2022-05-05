const { context } = require('../base')

module.exports = function (API) {
  class Currency extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Currency] })
}