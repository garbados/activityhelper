const { context } = require('../base')

module.exports = function (API) {
  class ArchiveHeld extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ArchiveHeld] })
}