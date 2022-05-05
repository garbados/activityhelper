const { context } = require('../base')

module.exports = function (API) {
  class AreaServed extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AreaServed] })
}