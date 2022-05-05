const { context } = require('../base')

module.exports = function (API) {
  class AcceptedOffer extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AcceptedOffer] })
}