const { context } = require('../base')

module.exports = function (API) {
  class LegalStatus extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LegalStatus] })
}