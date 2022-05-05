const { context } = require('../base')

module.exports = function (API) {
  class CountryOfLastProcessing extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CountryOfLastProcessing] })
}