const { context } = require('../base')

module.exports = function (API) {
  class YearBuilt extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [YearBuilt] })
}