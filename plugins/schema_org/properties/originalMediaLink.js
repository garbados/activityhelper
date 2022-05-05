const { context } = require('../base')

module.exports = function (API) {
  class OriginalMediaLink extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [OriginalMediaLink] })
}