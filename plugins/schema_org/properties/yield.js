const { context } = require('../base')

module.exports = function (API) {
  class Yield extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Yield] })
}