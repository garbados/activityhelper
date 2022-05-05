const { context } = require('../base')

module.exports = function (API) {
  class RelatedCondition extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RelatedCondition] })
}