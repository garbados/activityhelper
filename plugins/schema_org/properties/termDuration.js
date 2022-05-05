const { context } = require('../base')

module.exports = function (API) {
  class TermDuration extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TermDuration] })
}