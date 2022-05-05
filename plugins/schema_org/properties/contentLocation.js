const { context } = require('../base')

module.exports = function (API) {
  class ContentLocation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ContentLocation] })
}