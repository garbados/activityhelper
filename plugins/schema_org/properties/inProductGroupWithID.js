const { context } = require('../base')

module.exports = function (API) {
  class InProductGroupWithID extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [InProductGroupWithID] })
}