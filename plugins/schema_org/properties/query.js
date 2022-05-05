const { context } = require('../base')

module.exports = function (API) {
  class Query extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Query] })
}