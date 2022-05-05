const { context } = require('../base')

module.exports = function (API) {
  class Warning extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Warning] })
}