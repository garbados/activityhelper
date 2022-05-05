const { context } = require('../base')

module.exports = function (API) {
  class Artist extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Artist] })
}