const { context } = require('../base')

module.exports = function (API) {
  class Distance extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Distance] })
}