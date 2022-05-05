const { context } = require('../base')

module.exports = function (API) {
  class ValueRequired extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ValueRequired] })
}