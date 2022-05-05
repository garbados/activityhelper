const { context } = require('../base')

module.exports = function (API) {
  class InterpretedAsClaim extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InterpretedAsClaim] })
}