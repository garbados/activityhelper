const { context } = require('../base')

module.exports = function (API) {
  class RelatedTo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RelatedTo] })
}