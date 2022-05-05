const { context } = require('../base')

module.exports = function (API) {
  class Algorithm extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Algorithm] })
}