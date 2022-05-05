const { context } = require('../base')

module.exports = function (API) {
  class HighPrice extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HighPrice] })
}