const { context } = require('../base')

module.exports = function (API) {
  class Produces extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Produces] })
}