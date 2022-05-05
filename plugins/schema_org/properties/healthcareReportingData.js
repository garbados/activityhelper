const { context } = require('../base')

module.exports = function (API) {
  class HealthcareReportingData extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HealthcareReportingData] })
}