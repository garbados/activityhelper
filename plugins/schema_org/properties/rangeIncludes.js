const { context } = require('../base')

module.exports = function (API) {
  class RangeIncludes extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RangeIncludes] })
}