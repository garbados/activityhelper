const { context } = require('../base')

module.exports = function (API) {
  class DiseasePreventionInfo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DiseasePreventionInfo] })
}