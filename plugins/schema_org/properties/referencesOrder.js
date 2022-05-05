const { context } = require('../base')

module.exports = function (API) {
  class ReferencesOrder extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ReferencesOrder] })
}