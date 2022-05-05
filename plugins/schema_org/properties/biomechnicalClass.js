const { context } = require('../base')

module.exports = function (API) {
  class BiomechnicalClass extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BiomechnicalClass] })
}