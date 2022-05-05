const { context } = require('../base')

module.exports = function (API) {
  class TypicalTest extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TypicalTest] })
}