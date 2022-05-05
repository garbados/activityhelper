const { context } = require('../base')

module.exports = function (API) {
  class PrescribingInfo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PrescribingInfo] })
}