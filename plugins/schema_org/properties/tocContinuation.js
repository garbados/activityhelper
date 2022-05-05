const { context } = require('../base')

module.exports = function (API) {
  class TocContinuation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TocContinuation] })
}