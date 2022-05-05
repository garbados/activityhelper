const { context } = require('../base')

module.exports = function (API) {
  class ContactlessPayment extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ContactlessPayment] })
}