const { context } = require('../base')

module.exports = function (API) {
  class RelatedLink extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RelatedLink] })
}