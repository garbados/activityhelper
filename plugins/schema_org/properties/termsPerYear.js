const { context } = require('../base')

module.exports = function (API) {
  class TermsPerYear extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TermsPerYear] })
}