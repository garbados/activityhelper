const { context } = require('../base')

module.exports = function (API) {
  class Procedure extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Procedure] })
}