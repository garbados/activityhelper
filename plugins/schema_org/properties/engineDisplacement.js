const { context } = require('../base')

module.exports = function (API) {
  class EngineDisplacement extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EngineDisplacement] })
}