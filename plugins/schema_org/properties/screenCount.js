const { context } = require('../base')

module.exports = function (API) {
  class ScreenCount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ScreenCount] })
}