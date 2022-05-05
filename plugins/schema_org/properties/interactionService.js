const { context } = require('../base')

module.exports = function (API) {
  class InteractionService extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InteractionService] })
}