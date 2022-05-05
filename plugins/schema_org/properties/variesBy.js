const { context } = require('../base')

module.exports = function (API) {
  class VariesBy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [VariesBy] })
}