const { context } = require('../base')

module.exports = function (API) {
  class LeaseLength extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LeaseLength] })
}