const { context } = require('../base')

module.exports = function (API) {
  class Position extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Position] })
}