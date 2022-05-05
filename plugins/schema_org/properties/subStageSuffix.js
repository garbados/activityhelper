const { context } = require('../base')

module.exports = function (API) {
  class SubStageSuffix extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SubStageSuffix] })
}