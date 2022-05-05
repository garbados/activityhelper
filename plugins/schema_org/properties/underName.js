const { context } = require('../base')

module.exports = function (API) {
  class UnderName extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [UnderName] })
}