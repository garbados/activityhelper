const { context } = require('../base')

module.exports = function (API) {
  class Map extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Map] })
}