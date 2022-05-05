const { context } = require('../base')

module.exports = function (API) {
  class ValidFrom extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ValidFrom] })
}