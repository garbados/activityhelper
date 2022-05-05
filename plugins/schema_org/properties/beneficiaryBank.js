const { context } = require('../base')

module.exports = function (API) {
  class BeneficiaryBank extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BeneficiaryBank] })
}