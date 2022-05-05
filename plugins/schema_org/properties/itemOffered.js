const { context } = require('../base')

module.exports = function (API) {
  class ItemOffered extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ItemOffered] })
}