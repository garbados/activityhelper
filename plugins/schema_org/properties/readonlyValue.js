const { context } = require('../base')

module.exports = function (API) {
  class ReadonlyValue extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReadonlyValue] })
}