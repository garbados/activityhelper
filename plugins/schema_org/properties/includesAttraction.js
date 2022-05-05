const { context } = require('../base')

module.exports = function (API) {
  class IncludesAttraction extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IncludesAttraction] })
}