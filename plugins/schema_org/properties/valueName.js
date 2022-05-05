const { context } = require('../base')

module.exports = function (API) {
  class ValueName extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ValueName] })
}