const { context } = require('../base')

module.exports = function (API) {
  class Greater extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Greater] })
}