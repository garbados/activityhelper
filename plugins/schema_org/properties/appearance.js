const { context } = require('../base')

module.exports = function (API) {
  class Appearance extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Appearance] })
}