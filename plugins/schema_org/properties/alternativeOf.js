const { context } = require('../base')

module.exports = function (API) {
  class AlternativeOf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AlternativeOf] })
}