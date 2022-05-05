const { context } = require('../base')

module.exports = function (API) {
  class Performers extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Performers] })
}