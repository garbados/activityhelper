const { context } = require('../base')

module.exports = function (API) {
  class Seeks extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Seeks] })
}