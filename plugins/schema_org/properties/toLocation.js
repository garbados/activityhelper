const { context } = require('../base')

module.exports = function (API) {
  class ToLocation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ToLocation] })
}