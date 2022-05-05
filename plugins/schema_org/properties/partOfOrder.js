const { context } = require('../base')

module.exports = function (API) {
  class PartOfOrder extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PartOfOrder] })
}