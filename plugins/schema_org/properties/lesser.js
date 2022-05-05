const { context } = require('../base')

module.exports = function (API) {
  class Lesser extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Lesser] })
}