const { context } = require('../base')

module.exports = function (API) {
  class ProcessorRequirements extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ProcessorRequirements] })
}