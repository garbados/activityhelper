const { context } = require('../base')

module.exports = function (API) {
  class Value extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Value] })
}