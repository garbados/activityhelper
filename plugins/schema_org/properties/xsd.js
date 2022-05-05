const { context } = require('../base')

module.exports = function (API) {
  class Xsd extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Xsd] })
}