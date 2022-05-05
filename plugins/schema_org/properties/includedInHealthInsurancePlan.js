const { context } = require('../base')

module.exports = function (API) {
  class IncludedInHealthInsurancePlan extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IncludedInHealthInsurancePlan] })
}