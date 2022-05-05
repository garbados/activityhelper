const { context } = require('../base')

module.exports = function (API) {
  class Lyricist extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Lyricist] })
}