const { context } = require('../base')

module.exports = function (API) {
  class Recipe extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Recipe] })
}