const { context } = require('../base')

module.exports = function (API) {
  class ServesCuisine extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ServesCuisine] })
}