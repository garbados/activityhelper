const { context } = require('../base')

module.exports = function (API) {
  class Overdosage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Overdosage] })
}