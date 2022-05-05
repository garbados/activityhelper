const { context } = require('../base')

module.exports = function (API) {
  class ClinicalPharmacology extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ClinicalPharmacology] })
}