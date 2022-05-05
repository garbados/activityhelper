const { context } = require('../base')

module.exports = function (API) {
  class TissueSample extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TissueSample] })
}