const { context } = require('../base')

module.exports = function (API) {
  class BranchOf extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BranchOf] })
}