const { context } = require('../base')

module.exports = function (API) {
  class Xpath extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Xpath] })
}