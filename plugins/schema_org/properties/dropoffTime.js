const { context } = require('../base')

module.exports = function (API) {
  class DropoffTime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DropoffTime] })
}