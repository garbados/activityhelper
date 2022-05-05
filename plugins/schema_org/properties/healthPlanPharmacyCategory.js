const { context } = require('../base')

module.exports = function (API) {
  class HealthPlanPharmacyCategory extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HealthPlanPharmacyCategory] })
}