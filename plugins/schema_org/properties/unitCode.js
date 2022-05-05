const { context } = require('../base')

module.exports = function (API) {
  class UnitCode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [UnitCode] })
}