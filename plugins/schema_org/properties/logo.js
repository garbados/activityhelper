const { context } = require('../base')

module.exports = function (API) {
  class Logo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Logo] })
}