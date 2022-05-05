const { context } = require('../base')

module.exports = function (API) {
  class PassengerSequenceNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PassengerSequenceNumber] })
}