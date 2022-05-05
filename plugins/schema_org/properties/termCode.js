const { context } = require('../base')

module.exports = function (API) {
  class TermCode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TermCode] })
}