const { context } = require('../base')

module.exports = function (API) {
  class Encoding extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Encoding] })
}