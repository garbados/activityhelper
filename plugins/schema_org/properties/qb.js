const { context } = require('../base')

module.exports = function (API) {
  class Qb extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Qb] })
}