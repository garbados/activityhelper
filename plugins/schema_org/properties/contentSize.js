const { context } = require('../base')

module.exports = function (API) {
  class ContentSize extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ContentSize] })
}