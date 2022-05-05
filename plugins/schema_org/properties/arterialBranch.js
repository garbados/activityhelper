const { context } = require('../base')

module.exports = function (API) {
  class ArterialBranch extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ArterialBranch] })
}