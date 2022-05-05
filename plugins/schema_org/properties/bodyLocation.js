const { context } = require('../base')

module.exports = function (API) {
  class BodyLocation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BodyLocation] })
}