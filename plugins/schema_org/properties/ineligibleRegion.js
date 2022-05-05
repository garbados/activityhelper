const { context } = require('../base')

module.exports = function (API) {
  class IneligibleRegion extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IneligibleRegion] })
}