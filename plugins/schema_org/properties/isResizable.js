const { context } = require('../base')

module.exports = function (API) {
  class IsResizable extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsResizable] })
}