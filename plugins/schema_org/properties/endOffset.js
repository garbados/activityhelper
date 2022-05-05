const { context } = require('../base')

module.exports = function (API) {
  class EndOffset extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EndOffset] })
}