const { context } = require('../base')

module.exports = function (API) {
  class InPlaylist extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InPlaylist] })
}