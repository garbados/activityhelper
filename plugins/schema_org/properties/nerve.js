const { context } = require('../base')

module.exports = function (API) {
  class Nerve extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Nerve] })
}