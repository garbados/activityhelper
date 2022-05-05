const { context } = require('../base')

module.exports = function (API) {
  class PostOp extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PostOp] })
}