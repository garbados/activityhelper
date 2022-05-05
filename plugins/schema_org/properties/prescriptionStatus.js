const { context } = require('../base')

module.exports = function (API) {
  class PrescriptionStatus extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PrescriptionStatus] })
}