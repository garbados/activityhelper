const { context } = require('../base')

module.exports = function (API) {
  class Lender extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Lender] })
}