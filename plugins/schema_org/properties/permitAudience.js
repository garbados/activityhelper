const { context } = require('../base')

module.exports = function (API) {
  class PermitAudience extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PermitAudience] })
}