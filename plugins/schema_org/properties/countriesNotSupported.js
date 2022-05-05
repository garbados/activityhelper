const { context } = require('../base')

module.exports = function (API) {
  class CountriesNotSupported extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CountriesNotSupported] })
}