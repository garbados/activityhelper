const { context } = require('../base')

module.exports = function (API) {
  class License extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [License] })
}