const { context } = require('../base')

module.exports = function (API) {
  class Provider extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Provider] })
}