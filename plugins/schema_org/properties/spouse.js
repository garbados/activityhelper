const { context } = require('../base')

module.exports = function (API) {
  class Spouse extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Spouse] })
}