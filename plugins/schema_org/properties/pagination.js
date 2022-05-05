const { context } = require('../base')

module.exports = function (API) {
  class Pagination extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Pagination] })
}