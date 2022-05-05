const { context } = require('../base')

module.exports = function (API) {
  class EstimatedCost extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EstimatedCost] })
}