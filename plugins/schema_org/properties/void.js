const { context } = require('../base')

module.exports = function (API) {
  class Void extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Void] })
}