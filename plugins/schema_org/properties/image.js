const { context } = require('../base')

module.exports = function (API) {
  class Image extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Image] })
}