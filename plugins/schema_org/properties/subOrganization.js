const { context } = require('../base')

module.exports = function (API) {
  class SubOrganization extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SubOrganization] })
}