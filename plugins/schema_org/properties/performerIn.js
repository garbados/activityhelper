const { context } = require('../base')

module.exports = function (API) {
  class PerformerIn extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PerformerIn] })
}