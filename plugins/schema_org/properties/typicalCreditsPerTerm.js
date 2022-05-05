const { context } = require('../base')

module.exports = function (API) {
  class TypicalCreditsPerTerm extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TypicalCreditsPerTerm] })
}