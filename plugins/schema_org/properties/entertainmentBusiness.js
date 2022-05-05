const { context } = require('../base')

module.exports = function (API) {
  class EntertainmentBusiness extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EntertainmentBusiness] })
}