const { context } = require('../base')

module.exports = function (API) {
  class EnergyEfficiencyScaleMax extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EnergyEfficiencyScaleMax] })
}