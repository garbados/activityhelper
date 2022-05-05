const { context } = require('../base')

module.exports = function (API) {
  class FloorSize extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FloorSize] })
}