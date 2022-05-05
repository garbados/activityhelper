const { context } = require('../base')

module.exports = function (API) {
  class MediaAuthenticityCategory extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MediaAuthenticityCategory] })
}