const { context } = require('../base')

module.exports = function (API) {
  class AdverseOutcome extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AdverseOutcome] })
}