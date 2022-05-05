const { context } = require('../base')

module.exports = function (API) {
  class IcaoCode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IcaoCode] })
}