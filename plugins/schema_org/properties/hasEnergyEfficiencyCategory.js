const { context } = require('../base')

module.exports = function (API) {
  class HasEnergyEfficiencyCategory extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasEnergyEfficiencyCategory] })
}