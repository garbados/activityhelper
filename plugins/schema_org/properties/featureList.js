const { context } = require('../base')

module.exports = function (API) {
  class FeatureList extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FeatureList] })
}