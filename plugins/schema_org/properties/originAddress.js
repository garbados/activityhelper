const { context } = require('../base')

module.exports = function (API) {
  class OriginAddress extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [OriginAddress] })
}