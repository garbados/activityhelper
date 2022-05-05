const { context } = require('../base')

module.exports = function (API) {
  class Runtime extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Runtime] })
}