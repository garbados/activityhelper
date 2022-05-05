const { context } = require('../base')

module.exports = function (API) {
  class AvailableService extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AvailableService] })
}