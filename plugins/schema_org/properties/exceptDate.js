const { context } = require('../base')

module.exports = function (API) {
  class ExceptDate extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ExceptDate] })
}