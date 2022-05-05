const { context } = require('../base')

module.exports = function (API) {
  class Xml extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Xml] })
}