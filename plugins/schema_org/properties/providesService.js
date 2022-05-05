const { context } = require('../base')

module.exports = function (API) {
  class ProvidesService extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProvidesService] })
}