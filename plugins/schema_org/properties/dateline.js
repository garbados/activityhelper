const { context } = require('../base')

module.exports = function (API) {
  class Dateline extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Dateline] })
}