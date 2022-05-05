const { context } = require('../base')

module.exports = function (API) {
  class MusicArrangement extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MusicArrangement] })
}