const { context } = require('../base')

module.exports = function (API) {
  class OfferedBy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [OfferedBy] })
}