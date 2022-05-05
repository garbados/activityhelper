const { context } = require('../base')

module.exports = function (API) {
  class Application extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Application] })
}