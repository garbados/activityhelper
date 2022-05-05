const { context } = require('../base')

module.exports = function (API) {
  class GovernmentBenefitsInfo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [GovernmentBenefitsInfo] })
}