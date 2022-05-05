const { context } = require('../base')

module.exports = function (API) {
  class SubTest extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SubTest] })
}