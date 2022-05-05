const { context } = require('../base')

module.exports = function (API) {
  class MathExpression extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MathExpression] })
}