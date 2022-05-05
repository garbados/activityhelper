const { context } = require('../base')

module.exports = function (API) {
  class CountryOfAssembly extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CountryOfAssembly] })
}