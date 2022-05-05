const { context } = require('../base')

module.exports = function (API) {
  class SuggestedGender extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SuggestedGender] })
}