const { context } = require('../base')

module.exports = function (API) {
  class Owns extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Owns] })
}