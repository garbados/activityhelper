const { context } = require('../base')

module.exports = function (API) {
  class PostalCodeBegin extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PostalCodeBegin] })
}