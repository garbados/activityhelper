const { context } = require('../base')

module.exports = function (API) {
  class Customer extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Customer] })
}