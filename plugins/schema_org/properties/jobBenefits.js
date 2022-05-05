const { context } = require('../base')

module.exports = function (API) {
  class JobBenefits extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [JobBenefits] })
}