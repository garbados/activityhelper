const { context } = require('../base')

module.exports = function (API) {
  class PermittedUsage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PermittedUsage] })
}