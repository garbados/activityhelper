const { context } = require('../base')

module.exports = function (API) {
  class LayoutImage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [LayoutImage] })
}