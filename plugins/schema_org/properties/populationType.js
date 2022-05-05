const { context } = require('../base')

module.exports = function (API) {
  class PopulationType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PopulationType] })
}