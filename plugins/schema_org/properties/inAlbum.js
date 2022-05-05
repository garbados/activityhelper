const { context } = require('../base')

module.exports = function (API) {
  class InAlbum extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InAlbum] })
}