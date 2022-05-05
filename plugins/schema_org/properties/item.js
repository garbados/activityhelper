const { context } = require('../base')

module.exports = function (API) {
  class Item extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Item] })
}