const { context } = require('../base')

module.exports = function (API) {
  class BranchCode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BranchCode] })
}