const { context } = require('../base')

module.exports = function (API) {
  class DiseaseSpreadStatistics extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DiseaseSpreadStatistics] })
}