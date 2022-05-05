const { context } = require('../base')

module.exports = function (API) {
  class CostOrigin extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CostOrigin] })
}