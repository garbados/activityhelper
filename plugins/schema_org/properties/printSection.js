const { context } = require('../base')

module.exports = function (API) {
  class PrintSection extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PrintSection] })
}