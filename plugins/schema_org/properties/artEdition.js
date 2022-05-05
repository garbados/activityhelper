const { context } = require('../base')

module.exports = function (API) {
  class ArtEdition extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ArtEdition] })
}