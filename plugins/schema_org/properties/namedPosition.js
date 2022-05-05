const { context } = require('../base')

module.exports = function (API) {
  class NamedPosition extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NamedPosition] })
}