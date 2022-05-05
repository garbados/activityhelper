const { context } = require('../base')

module.exports = function (API) {
  class MedicalAudience extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MedicalAudience] })
}