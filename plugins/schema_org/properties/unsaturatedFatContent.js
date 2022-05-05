const { context } = require('../base')

module.exports = function (API) {
  class UnsaturatedFatContent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [UnsaturatedFatContent] })
}