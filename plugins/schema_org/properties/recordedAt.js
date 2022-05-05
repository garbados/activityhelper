const { context } = require('../base')

module.exports = function (API) {
  class RecordedAt extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RecordedAt] })
}