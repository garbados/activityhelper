const { context } = require('../base')

module.exports = function (API) {
  class LowPrice extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LowPrice] })
}