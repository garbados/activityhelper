const { context } = require('../base')

module.exports = function (API) {
  class HasCategoryCode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasCategoryCode] })
}