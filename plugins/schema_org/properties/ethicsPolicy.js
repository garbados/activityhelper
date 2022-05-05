const { context } = require('../base')

module.exports = function (API) {
  class EthicsPolicy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EthicsPolicy] })
}