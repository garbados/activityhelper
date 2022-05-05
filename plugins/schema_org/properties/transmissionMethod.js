const { context } = require('../base')

module.exports = function (API) {
  class TransmissionMethod extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TransmissionMethod] })
}