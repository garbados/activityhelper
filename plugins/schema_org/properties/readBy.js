const { context } = require('../base')

module.exports = function (API) {
  class ReadBy extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReadBy] })
}