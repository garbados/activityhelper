const { context } = require('../base')

module.exports = function (API) {
  class GreaterOrEqual extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GreaterOrEqual] })
}