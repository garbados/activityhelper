const { context } = require('../base')

module.exports = function (API) {
  class IataCode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IataCode] })
}