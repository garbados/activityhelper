const { context } = require('../base')

module.exports = function (API) {
  class Publisher extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Publisher] })
}