const { context } = require('../base')

module.exports = function (API) {
  class NetWorth extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NetWorth] })
}