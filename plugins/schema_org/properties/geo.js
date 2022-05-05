const { context } = require('../base')

module.exports = function (API) {
  class Geo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Geo] })
}