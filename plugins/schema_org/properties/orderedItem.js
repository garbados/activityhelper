const { context } = require('../base')

module.exports = function (API) {
  class OrderedItem extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [OrderedItem] })
}