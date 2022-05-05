const { context } = require('../base')

module.exports = function (API) {
  class ClaimInterpreter extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ClaimInterpreter] })
}