const { context } = require('../base')

module.exports = function (API) {
  class AlbumRelease extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AlbumRelease] })
}