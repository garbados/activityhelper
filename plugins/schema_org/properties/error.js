const { context } = require('../base')

module.exports = function (API) {
  class Error extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Error] })
}