const { context } = require('../base')

module.exports = function (API) {
  class Brand extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Brand] })
}