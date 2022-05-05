const { context } = require('../base')

module.exports = function (API) {
  class DoseUnit extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DoseUnit] })
}