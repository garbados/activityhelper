const { context } = require('../base')

module.exports = function (API) {
  class MeasuredValue extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MeasuredValue] })
}