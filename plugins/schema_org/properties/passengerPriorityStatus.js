const { context } = require('../base')

module.exports = function (API) {
  class PassengerPriorityStatus extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PassengerPriorityStatus] })
}