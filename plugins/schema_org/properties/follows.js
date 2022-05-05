const { context } = require('../base')

module.exports = function (API) {
  class Follows extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Follows] })
}