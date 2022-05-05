const { context } = require('../base')

module.exports = function (API) {
  class Funding extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Funding] })
}