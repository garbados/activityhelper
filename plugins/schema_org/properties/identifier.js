const { context } = require('../base')

module.exports = function (API) {
  class Identifier extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Identifier] })
}