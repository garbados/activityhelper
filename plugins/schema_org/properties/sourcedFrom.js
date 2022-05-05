const { context } = require('../base')

module.exports = function (API) {
  class SourcedFrom extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SourcedFrom] })
}