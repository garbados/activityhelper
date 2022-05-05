const { context } = require('../base')

module.exports = function (API) {
  class FeesAndCommissionsSpecification extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FeesAndCommissionsSpecification] })
}