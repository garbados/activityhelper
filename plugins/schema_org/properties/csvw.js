const { context } = require('../base')

module.exports = function (API) {
  class Csvw extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Csvw] })
}