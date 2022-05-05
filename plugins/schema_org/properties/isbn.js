const { context } = require('../base')

module.exports = function (API) {
  class Isbn extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Isbn] })
}