const { context } = require('../base')

module.exports = function (API) {
  class IncludedComposition extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IncludedComposition] })
}