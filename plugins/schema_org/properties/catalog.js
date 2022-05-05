const { context } = require('../base')

module.exports = function (API) {
  class Catalog extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Catalog] })
}