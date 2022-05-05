const { context } = require('../base')

module.exports = function (API) {
  class Tributary extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Tributary] })
}