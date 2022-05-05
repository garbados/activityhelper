const { context } = require('../base')

module.exports = function (API) {
  class FundedItem extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [FundedItem] })
}