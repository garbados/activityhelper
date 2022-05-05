const { context } = require('../base')

module.exports = function (API) {
  class CostPerUnit extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CostPerUnit] })
}