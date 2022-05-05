const { context } = require('../base')

module.exports = function (API) {
  class CountriesSupported extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CountriesSupported] })
}