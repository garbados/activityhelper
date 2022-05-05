const { context } = require('../base')

module.exports = function (API) {
  class PhysiologicalBenefits extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PhysiologicalBenefits] })
}