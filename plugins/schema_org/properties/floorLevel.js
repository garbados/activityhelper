const { context } = require('../base')

module.exports = function (API) {
  class FloorLevel extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FloorLevel] })
}