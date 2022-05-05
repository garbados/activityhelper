const { context } = require('../base')

module.exports = function (API) {
  class StartOffset extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [StartOffset] })
}