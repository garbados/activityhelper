const { context } = require('../base')

module.exports = function (API) {
  class DoseValue extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DoseValue] })
}