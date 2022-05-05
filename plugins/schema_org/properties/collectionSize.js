const { context } = require('../base')

module.exports = function (API) {
  class CollectionSize extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CollectionSize] })
}