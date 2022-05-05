const { context } = require('../base')

module.exports = function (API) {
  class SourceOrganization extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SourceOrganization] })
}