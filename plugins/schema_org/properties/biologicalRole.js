const { context } = require('../base')

module.exports = function (API) {
  class BiologicalRole extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BiologicalRole] })
}