const { context } = require('../base')

module.exports = function (API) {
  class ValidIn extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ValidIn] })
}