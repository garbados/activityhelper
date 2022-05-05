const { context } = require('../base')

module.exports = function (API) {
  class HasPOS extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasPOS] })
}