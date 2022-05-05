const { context } = require('../base')

module.exports = function (API) {
  class CssSelector extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CssSelector] })
}