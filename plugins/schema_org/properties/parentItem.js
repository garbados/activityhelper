const { context } = require('../base')

module.exports = function (API) {
  class ParentItem extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ParentItem] })
}