const { context } = require('../base')

module.exports = function (API) {
  class EligibleDuration extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EligibleDuration] })
}