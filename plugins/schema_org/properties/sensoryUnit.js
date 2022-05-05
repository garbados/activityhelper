const { context } = require('../base')

module.exports = function (API) {
  class SensoryUnit extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SensoryUnit] })
}