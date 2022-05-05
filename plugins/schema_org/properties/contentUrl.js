const { context } = require('../base')

module.exports = function (API) {
  class ContentUrl extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ContentUrl] })
}