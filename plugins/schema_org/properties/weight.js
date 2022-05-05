const { context } = require('../base')

module.exports = function (API) {
  class Weight extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Weight] })
}