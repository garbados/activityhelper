const { context } = require('../base')

module.exports = function (API) {
  class SuggestedAnswer extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SuggestedAnswer] })
}