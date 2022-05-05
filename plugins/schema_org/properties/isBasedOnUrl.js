const { context } = require('../base')

module.exports = function (API) {
  class IsBasedOnUrl extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsBasedOnUrl] })
}