const { context } = require('../base')

module.exports = function (API) {
  class ValidFor extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ValidFor] })
}