const { context } = require('../base')

module.exports = function (API) {
  class PrimaryPrevention extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PrimaryPrevention] })
}