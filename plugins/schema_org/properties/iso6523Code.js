const { context } = require('../base')

module.exports = function (API) {
  class Iso6523Code extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Iso6523Code] })
}