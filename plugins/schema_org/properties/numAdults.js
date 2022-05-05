const { context } = require('../base')

module.exports = function (API) {
  class NumAdults extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumAdults] })
}