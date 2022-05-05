const { context } = require('../base')

module.exports = function (API) {
  class Thumbnail extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Thumbnail] })
}