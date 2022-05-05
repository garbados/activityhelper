const { context } = require('../base')

module.exports = function (API) {
  class Photo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Photo] })
}