const { context } = require('../base')

module.exports = function (API) {
  class IsRelatedTo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsRelatedTo] })
}