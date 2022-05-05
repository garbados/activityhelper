const { context } = require('../base')

module.exports = function (API) {
  class InterestRate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InterestRate] })
}