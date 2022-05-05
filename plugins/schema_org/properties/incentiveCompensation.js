const { context } = require('../base')

module.exports = function (API) {
  class IncentiveCompensation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IncentiveCompensation] })
}