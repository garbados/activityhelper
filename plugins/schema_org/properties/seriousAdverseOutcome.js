const { context } = require('../base')

module.exports = function (API) {
  class SeriousAdverseOutcome extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SeriousAdverseOutcome] })
}