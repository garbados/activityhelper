const { context } = require('../base')

module.exports = function (API) {
  class ExifData extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ExifData] })
}