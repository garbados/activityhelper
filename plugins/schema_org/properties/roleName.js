const { context } = require('../base')

module.exports = function (API) {
  class RoleName extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RoleName] })
}