const { context } = require('../base')

module.exports = function (API) {
  class PageEnd extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PageEnd] })
}