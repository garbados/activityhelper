const { context } = require('../base')

module.exports = function (API) {
  class RegionDrained extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RegionDrained] })
}