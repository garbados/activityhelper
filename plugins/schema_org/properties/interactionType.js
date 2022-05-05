const { context } = require('../base')

module.exports = function (API) {
  class InteractionType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InteractionType] })
}