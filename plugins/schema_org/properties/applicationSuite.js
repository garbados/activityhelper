const { context } = require('../base')

module.exports = function (API) {
  class ApplicationSuite extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ApplicationSuite] })
}