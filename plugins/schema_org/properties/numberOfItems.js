const { context } = require('../base')

module.exports = function (API) {
  class NumberOfItems extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NumberOfItems] })
}