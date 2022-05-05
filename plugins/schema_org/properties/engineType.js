const { context } = require('../base')

module.exports = function (API) {
  class EngineType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EngineType] })
}