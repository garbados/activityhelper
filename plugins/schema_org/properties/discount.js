const { context } = require('../base')

module.exports = function (API) {
  class Discount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Discount] })
}