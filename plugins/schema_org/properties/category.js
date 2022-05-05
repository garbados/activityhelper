const { context } = require('../base')

module.exports = function (API) {
  class Category extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Category] })
}