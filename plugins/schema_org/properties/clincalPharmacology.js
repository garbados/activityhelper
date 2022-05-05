const { context } = require('../base')

module.exports = function (API) {
  class ClincalPharmacology extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ClincalPharmacology] })
}