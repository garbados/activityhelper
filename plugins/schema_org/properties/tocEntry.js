const { context } = require('../base')

module.exports = function (API) {
  class TocEntry extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TocEntry] })
}