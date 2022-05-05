const { context } = require('../base')

module.exports = function (API) {
  class Color extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Color] })
}