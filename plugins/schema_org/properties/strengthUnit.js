const { context } = require('../base')

module.exports = function (API) {
  class StrengthUnit extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [StrengthUnit] })
}