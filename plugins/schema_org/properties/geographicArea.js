const { context } = require('../base')

module.exports = function (API) {
  class GeographicArea extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GeographicArea] })
}