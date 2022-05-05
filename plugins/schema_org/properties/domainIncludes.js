const { context } = require('../base')

module.exports = function (API) {
  class DomainIncludes extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DomainIncludes] })
}