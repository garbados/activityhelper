const { context } = require('../base')

module.exports = function (API) {
  class Offers extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Offers] })
}