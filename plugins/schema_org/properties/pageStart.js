const { context } = require('../base')

module.exports = function (API) {
  class PageStart extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PageStart] })
}