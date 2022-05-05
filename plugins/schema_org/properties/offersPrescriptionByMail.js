const { context } = require('../base')

module.exports = function (API) {
  class OffersPrescriptionByMail extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [OffersPrescriptionByMail] })
}