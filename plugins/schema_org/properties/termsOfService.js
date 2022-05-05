const { context } = require('../base')

module.exports = function (API) {
  class TermsOfService extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TermsOfService] })
}