const { context } = require('../base')

module.exports = function (API) {
  class ParentOrganization extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ParentOrganization] })
}