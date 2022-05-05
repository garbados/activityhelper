const { context } = require('../base')

module.exports = function (API) {
  class InStoreReturnsOffered extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InStoreReturnsOffered] })
}