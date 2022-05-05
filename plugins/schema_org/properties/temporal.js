const { context } = require('../base')

module.exports = function (API) {
  class Temporal extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Temporal] })
}