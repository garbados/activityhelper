const { context } = require('../base')

module.exports = function (API) {
  class LegalName extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LegalName] })
}