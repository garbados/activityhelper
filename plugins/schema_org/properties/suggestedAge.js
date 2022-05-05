const { context } = require('../base')

module.exports = function (API) {
  class SuggestedAge extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SuggestedAge] })
}