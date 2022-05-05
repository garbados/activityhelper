const { context } = require('../base')

module.exports = function (API) {
  class ConfirmationNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ConfirmationNumber] })
}