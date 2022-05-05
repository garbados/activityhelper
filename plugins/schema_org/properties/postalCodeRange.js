const { context } = require('../base')

module.exports = function (API) {
  class PostalCodeRange extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PostalCodeRange] })
}