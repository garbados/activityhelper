const { context } = require('../base')

module.exports = function (API) {
  class AccessModeSufficient extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AccessModeSufficient] })
}