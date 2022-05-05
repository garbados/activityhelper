const { context } = require('../base')

module.exports = function (API) {
  class PostalCodeEnd extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PostalCodeEnd] })
}