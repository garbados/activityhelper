const { context } = require('../base')

module.exports = function (API) {
  class DropoffLocation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DropoffLocation] })
}