const { context } = require('../base')

module.exports = function (API) {
  class InteractionCount extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InteractionCount] })
}