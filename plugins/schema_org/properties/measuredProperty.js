const { context } = require('../base')

module.exports = function (API) {
  class MeasuredProperty extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MeasuredProperty] })
}