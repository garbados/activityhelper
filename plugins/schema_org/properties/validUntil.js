const { context } = require('../base')

module.exports = function (API) {
  class ValidUntil extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ValidUntil] })
}