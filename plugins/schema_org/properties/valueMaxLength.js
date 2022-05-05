const { context } = require('../base')

module.exports = function (API) {
  class ValueMaxLength extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ValueMaxLength] })
}