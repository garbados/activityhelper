const { context } = require('../base')

module.exports = function (API) {
  class TitleEIDR extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TitleEIDR] })
}