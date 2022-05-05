const { context } = require('../base')

module.exports = function (API) {
  class UnitText extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [UnitText] })
}