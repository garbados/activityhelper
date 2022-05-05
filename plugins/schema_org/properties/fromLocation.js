const { context } = require('../base')

module.exports = function (API) {
  class FromLocation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FromLocation] })
}