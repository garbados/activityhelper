const { context } = require('../base')

module.exports = function (API) {
  class EligibleTransactionVolume extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EligibleTransactionVolume] })
}