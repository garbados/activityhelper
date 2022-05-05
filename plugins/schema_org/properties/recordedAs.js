const { context } = require('../base')

module.exports = function (API) {
  class RecordedAs extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RecordedAs] })
}