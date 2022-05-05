const { context } = require('../base')

module.exports = function (API) {
  class SuggestedMaxAge extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SuggestedMaxAge] })
}