const { context } = require('../base')

module.exports = function (API) {
  class ByArtist extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ByArtist] })
}