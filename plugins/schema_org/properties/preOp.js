const { context } = require('../base')

module.exports = function (API) {
  class PreOp extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PreOp] })
}