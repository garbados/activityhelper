const { context } = require('../base')

module.exports = function (API) {
  class CountryOfOrigin extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CountryOfOrigin] })
}