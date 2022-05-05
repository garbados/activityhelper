const { context } = require('../base')

module.exports = function (API) {
  class SuggestedMinAge extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SuggestedMinAge] })
}