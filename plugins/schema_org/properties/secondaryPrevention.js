const { context } = require('../base')

module.exports = function (API) {
  class SecondaryPrevention extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SecondaryPrevention] })
}