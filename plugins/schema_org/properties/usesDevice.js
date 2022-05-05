const { context } = require('../base')

module.exports = function (API) {
  class UsesDevice extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [UsesDevice] })
}