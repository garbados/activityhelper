const { context } = require('../base')

module.exports = function (API) {
  class Spatial extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Spatial] })
}