const { context } = require('../base')

module.exports = function (API) {
  class DurationOfWarranty extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DurationOfWarranty] })
}