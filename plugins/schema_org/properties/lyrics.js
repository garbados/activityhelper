const { context } = require('../base')

module.exports = function (API) {
  class Lyrics extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Lyrics] })
}