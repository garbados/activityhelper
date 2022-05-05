const { context } = require('../base')

module.exports = function (API) {
  class InCodeSet extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InCodeSet] })
}