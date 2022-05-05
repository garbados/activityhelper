const { context } = require('../base')

module.exports = function (API) {
  class Permissions extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Permissions] })
}