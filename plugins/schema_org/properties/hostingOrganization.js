const { context } = require('../base')

module.exports = function (API) {
  class HostingOrganization extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HostingOrganization] })
}