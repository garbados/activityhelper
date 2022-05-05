const { context } = require('../base')

module.exports = function (API) {
  class VariableMeasured extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [VariableMeasured] })
}