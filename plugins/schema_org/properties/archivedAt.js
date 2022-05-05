const { context } = require('../base')

module.exports = function (API) {
  class ArchivedAt extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ArchivedAt] })
}