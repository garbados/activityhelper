const { context } = require('../base')

module.exports = function (API) {
  class AlbumProductionType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AlbumProductionType] })
}