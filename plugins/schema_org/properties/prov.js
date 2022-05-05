const { context } = require('../base')

module.exports = function (API) {
  class Prov extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Prov] })
}