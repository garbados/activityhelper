const { context } = require('../base')

module.exports = function (API) {
  class Location extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Location] })
}