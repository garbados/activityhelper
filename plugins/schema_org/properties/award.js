const { context } = require('../base')

module.exports = function (API) {
  class Award extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Award] })
}