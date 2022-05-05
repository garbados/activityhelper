const { context } = require('../base')

module.exports = function (API) {
  class ValueMinLength extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ValueMinLength] })
}