const { context } = require('../base')

module.exports = function (API) {
  class SchemaVersion extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SchemaVersion] })
}