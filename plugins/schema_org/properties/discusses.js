const { context } = require('../base')

module.exports = function (API) {
  class Discusses extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Discusses] })
}