const { context } = require('../base')

module.exports = function (API) {
  class Doap extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Doap] })
}