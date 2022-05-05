const { context } = require('../base')

module.exports = function (API) {
  class HasEnergyConsumptionDetails extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasEnergyConsumptionDetails] })
}