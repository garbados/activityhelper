const { context } = require('../base')

module.exports = function (API) {
  class VariablesMeasured extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [VariablesMeasured] })
}