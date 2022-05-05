const { context } = require('../base')

module.exports = function (API) {
  class StrengthValue extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [StrengthValue] })
}