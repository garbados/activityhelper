const { context } = require('../base')

module.exports = function (API) {
  class SupportingData extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SupportingData] })
}