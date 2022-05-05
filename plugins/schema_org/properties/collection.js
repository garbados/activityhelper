const { context } = require('../base')

module.exports = function (API) {
  class Collection extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Collection] })
}